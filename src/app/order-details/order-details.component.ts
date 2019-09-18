import { Component } from '@angular/core';
import { Router }              from '@angular/router';
import { Order } from '../model/order';
import { Pigeon } from '../model/pigeon';
import { WorkflowService } from '../service/workflow.service';
 
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html'
  
})
export class OrderDetailsComponent {
 
  order: Order;
  message: string;
  form: any;
 
  constructor(private router: Router, private workflowService: WorkflowService) {
  	this.message = "Fill the order details: ";
  	this.order = this.workflowService.orderDetails;
  }
  
  save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        console.log(" Now pigeon  : " + this.workflowService.orderDetails.deliveryPigeon.name);
        this.workflowService.orderDetails.deliveryPinCode = this.order.deliveryPinCode;
        this.workflowService.orderDetails.pickUpPinCode = this.order.pickUpPinCode;
        this.workflowService.orderDetails.packageType = this.order.packageType;
        return true;
  }

  goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the pigeons page
            this.router.navigate(['/pigeons']);
        }
    }

   goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the confirm page
            this.router.navigate(['/submitorder']);
        }
    }
}
