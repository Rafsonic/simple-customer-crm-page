import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../core/base-component';
import {Customer} from './shared/customer.class';
import {CustomerService} from './shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent extends BaseComponent implements OnInit {

  customer: Customer;

  constructor(private customerService: CustomerService) {
    super();
    this._getCustomer();
  }

  ngOnInit(): void {
  }

  private _getCustomer(): void {
    this.subscription = this.customerService
      .getCustomer()
      .subscribe(customer => {
        this.customer = customer;
      });
  }

}
