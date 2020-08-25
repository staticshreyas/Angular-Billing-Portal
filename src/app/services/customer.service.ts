import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';
import { baseURL } from '../shared/baseurl';

import{Customer} from '../shared/customer.model'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getCustomerList(): Observable<Customer[]>{
    return this.http.get<Customer[]>(baseURL+'/Customer');
  }
}

