import { Injectable } from '@angular/core';
import { Order } from '../shared/order.model';
import { OrderItem } from '../shared/order-item.model';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';
import { baseURL } from '../shared/baseurl';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  formData: Order;
  orderItems: OrderItem[];
  orderID: number;
  constructor(private http: HttpClient) { }

  saveOrUpdateOrder(): Observable<any>{
    var body = {
      ...this.formData,
      orderItems: this.orderItems
    }
    return this.http.post(baseURL + '/order', body);
  }

  getOrderList(): Observable<Order[]> {
    return this.http.get<Order[]>(baseURL + '/order');
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(baseURL + '/order/' + id);
  }

  deleteOrder(id:number):  Observable<Order> {
    return this.http.delete<Order>(baseURL + '/order/'+id);
  }
}
