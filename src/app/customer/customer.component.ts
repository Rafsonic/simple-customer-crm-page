import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../core/base-component';
import {Customer} from './shared/customer.class';
import {CustomerService} from './shared/customer.service';
import {QuickActions} from './quick-actions/shared/quick-actions.class';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent extends BaseComponent implements OnInit {

  customer: Customer;
  isEditMode: boolean = false;

  constructor(private customerService: CustomerService) {
    super();
    this._getCustomer();
  }

  ngOnInit(): void {
  }

  quickActionClicked(action: QuickActions): void {
    switch (action.key) {
      case 'edit-customer':
        this.isEditMode = !this.isEditMode;
        break;
      case 'change-status':
        break;
      case 'deposit':
        break;
      case 'withrawal':
        break;
    }
  }

  private _getCustomer(): void {
    this.subscription = this.customerService
      .getCustomer()
      .subscribe(customer => {
        this.customer = customer;
      });
  }

}
