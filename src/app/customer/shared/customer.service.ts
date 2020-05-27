import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {Customer} from './customer.class';
import {CUSTOMER} from './mock-customer-data';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerSubject = new Subject<Customer>();

  constructor() {
  }

  getCustomer(): Observable<Customer> {
    return of(CUSTOMER);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    this.sendCustomer(customer);
    return of(customer);
  }

  loadCustomer(): Observable<Customer> {
    return this.customerSubject.asObservable();
  }

  sendCustomer(customer: Customer) {
    this.customerSubject.next(customer);
  }

}
