import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';
import { Pigeon } from '../model/pigeon';
import { PigeonService } from '../service/pigeon.service';
import { WorkflowService } from '../service/workflow.service';

@Component({
  selector: 'app-pigeon-list',
  templateUrl: './select-pigeon.component.html'
  
})
export class SelectPigeonComponent implements OnInit {
 
  pigeons: Pigeon[];
  message: string;
  form: any;
  selectedPigeon: Pigeon;
  noPigeonAvailable: boolean = false;
 
  constructor(private router: Router, private pigeonService: PigeonService,
  	private workflowService: WorkflowService) {
  }
 
  ngOnInit() {
    this.pigeonService.findAll().subscribe(data => {
      this.pigeons = data;
      if (this.pigeons === undefined || this.pigeons.length == 0) {
      	this.message="No pigeons available. Please try later.";
      	this.noPigeonAvailable = true;
	  } else {
	  	this.noPigeonAvailable = false;
	  	this.message="Select the delivery pigeon:";
	  }
    },
    err => {
    	this.message="Unable to get list of available pigeons. Please try later.";
    	this.noPigeonAvailable = true;
    });
  }
  
  save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        this.workflowService.orderDetails.deliveryPigeon = this.selectedPigeon;
        console.log(" pigeon set to : " + this.workflowService.orderDetails.deliveryPigeon.name);
        return true;
  }

  goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the home page
            this.router.navigate(['/home']);
        }
    }

   goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the orderdetails page
            this.router.navigate(['/orderdetails']);
        }
    }
}
