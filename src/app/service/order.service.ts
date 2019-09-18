import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../model/order';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {

  private orderUrl: string;

  constructor(private http: HttpClient) {
    this.orderUrl = 'http://localhost:8080/order';
  }
  
  public save(order: Order) {
     return this.http.post<number>(this.orderUrl, order);
  }
  

 }