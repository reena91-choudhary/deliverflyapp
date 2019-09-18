import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';
import { WorkflowService } from '../service/workflow.service';

@Component({
  selector: 'app-complete',
  templateUrl: './completed.component.html'
})
export class CompletedComponent {
	successMessage = 'Congrats! Your order is booked';
	orderIdMessage = 'Your orderId is : ';
	orderId: number;
	
	constructor(private router: Router, private workflowService: WorkflowService) {}
	
	ngOnInit() {
		this.orderId = this.workflowService.getSavedOrderId();
	}
	bookNewOrder() {
		this.router.navigate(['/home']);
	}
}