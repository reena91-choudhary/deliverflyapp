import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router }              from '@angular/router';
import { Order } from '../model/order';
import { OrderService } from '../service/order.service';
import { WorkflowService } from '../service/workflow.service';

@Component({
  selector: 'app-submit-order',
  templateUrl: './submit-order.component.html'
})

export class SubmitOrderComponent implements OnInit {
  order: Order;
  message: string;
  form: any;
 
  constructor(private router: Router, private orderService: OrderService,
  	private workflowService: WorkflowService) {
  	this.message = "Please review your order details: ";
  }
  
  ngOnInit() {
  	this.order = this.workflowService.orderDetails;
  }
  submitOrder() {
  	this.orderService.save(this.order).subscribe(result => {
  			this.workflowService.setSavedOrderId(result);
  			this.router.navigate(['/completed']);
  		},
	  	err => {
	    	this.message="Unable to save the order." + err;
	    });
  }

  goToPrevious(form: any) {
       this.router.navigate(['/orderdetails']);
  }
   
}