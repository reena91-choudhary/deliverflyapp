import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../model/order';

@Injectable()
export class WorkflowService {

  public orderDetails = new Order();
  private savedOrderId: number;
  
  constructor() {
  	console.log("WorkflowService created");
  }
  
  setSavedOrderId(id: number) {
  	this.savedOrderId = id;
  }
  
  getSavedOrderId() {
  	return this.savedOrderId;
  }

 }