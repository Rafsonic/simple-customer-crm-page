import {Component, OnInit} from '@angular/core';
import {Customer} from '../shared/customer.class';
import {BaseComponent} from '../../core/base-component';
import {CustomerService} from '../shared/customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent extends BaseComponent implements OnInit {

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
