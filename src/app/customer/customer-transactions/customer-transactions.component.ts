import {Component, OnInit} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {CustomerService} from '../shared/customer.service';
import {BaseComponent} from '../../core/base-component';
import {Payment} from '../shared/payment.class';

@Component({
  selector: 'app-customer-transactions',
  templateUrl: './customer-transactions.component.html',
  styleUrls: ['./customer-transactions.component.scss']
})
export class CustomerTransactionsComponent extends BaseComponent implements OnInit {

  payments: Payment[] = [];
  displayedColumns: string[];
  dataSource = new MatTableDataSource<Payment>(this.payments);
  selection = new SelectionModel<Payment>(true, []);

  constructor(private customerService: CustomerService) {
    super();
    this._tableConfig();
    this._getCustomer();
    this._subscribeToEventChanges();
  }

  ngOnInit(): void {
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Payment): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  private _tableConfig() {
    this.displayedColumns = ['select', 'pid', 'gateway', 'amount', 'type', 'status', 'date'];
  }

  private _getCustomer(): void {
    this.subscription = this.customerService
      .getCustomer()
      .subscribe(customer => {
        this.payments = customer.payments;
        this._setTableData();
      });
  }

  private _setTableData(): void {
    this.dataSource = new MatTableDataSource<Payment>(this.payments);
    this.selection = new SelectionModel<Payment>(true, []);
  }

  private _subscribeToEventChanges() {
    this.subscription = this.customerService
      .loadCustomer()
      .subscribe(customer => {
        if (customer) {
          this.payments = customer.payments;
          this._setTableData();
        }
      });
  }


}
