import {Component} from '@angular/core';
import {TradingAccount} from '../shared/trading-account.class';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {CustomerService} from '../shared/customer.service';
import {BaseComponent} from '../../core/base-component';

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.scss']
})
export class CustomerAccountsComponent extends BaseComponent {

  accounts: TradingAccount[] = [];
  displayedColumns: string[];
  dataSource = new MatTableDataSource<TradingAccount>(this.accounts);
  selection = new SelectionModel<TradingAccount>(true, []);

  constructor(private customerService: CustomerService) {
    super();
    this._tableConfig();
    this._getCustomer();
  }

  private _tableConfig() {
    this.displayedColumns = ['taid', 'accountType', 'platform', 'balance'];
  }

  private _getCustomer(): void {
    this.subscription = this.customerService
      .getCustomer()
      .subscribe(customer => {
        this.accounts = customer.trading_accounts;
        this._setTableData();
      });
  }

  private _setTableData(): void {
    this.dataSource = new MatTableDataSource<TradingAccount>(this.accounts);
    this.selection = new SelectionModel<TradingAccount>(true, []);
  }


}
