import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../shared/customer.class';
import {MatDialog} from '@angular/material/dialog';
import {CreateTransactionComponent} from '../../create-transaction/create-transaction.component';
import {Status} from '../shared/status.enum';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.scss']
})
export class CustomerHeaderComponent {

  @Input() customer: Customer;
  status = Status;

  constructor(private dialog: MatDialog) {
  }

  _openDialog(action: string) {
    this.dialog.open(CreateTransactionComponent, {
      data: {
        type: action
      }
    });
  }

}
