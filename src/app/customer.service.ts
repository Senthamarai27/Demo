import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseURL = "http://localhost:8080/api/customers";
  userId: any;

  constructor(private httpClient: HttpClient) {}
    getCustomerList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);
   }
   createCustomer(customer: Customer): Observable<Object>{
     return this.httpClient.post(`${this.baseURL}`, customer);
   }
   getCustomerByUserId(userId:number): Observable<Customer>{
     return this.httpClient.get<Customer>(`${this.baseURL}/${userId}`);
   }
   updateCustomer(userId:number, customer:Customer): Observable<Object>{
     return this.httpClient.put(`${this.baseURL}/${userId}`, customer);
   }
   deleteCustomer(userId:number): Observable<Object>{
     return this.httpClient.delete(`${this.baseURL}/${userId}`);
   }
}
