import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private serverApi = 'https://secure-taiga-16048.herokuapp.com/customers/'

  constructor(private httpClient: HttpClient) { }

  getCustomerList() : Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.serverApi)
  }

  createCustomer(customer: Customer) : Observable<Customer> {
    return this.httpClient.post<Customer>(this.serverApi, customer)
  }

  updateCustomer(customer: Customer) : Observable<Customer> {
    return this.httpClient.put<Customer>(this.serverApi + customer.id, customer)
  }

  deleteCustomer(customerId: number) : Observable<any> {
    return this.httpClient.delete(this.serverApi + customerId, {
      headers: undefined,
      context: undefined,
      observe: undefined,
      params: undefined,
      reportProgress: undefined,
      responseType: 'text'
    })
  }
}
