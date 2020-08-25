import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';
import { baseURL } from '../shared/baseurl';

import{Item} from '../shared/item.model'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  getItemList(): Observable<Item[]>{
    return this.http.get<Item[]>(baseURL+'/Item');
  }
}
