import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerProfileComponent} from './customer/customer-profile/customer-profile.component';
import {CustomerAccountsComponent} from './customer/customer-accounts/customer-accounts.component';
import {CustomerTransactionsComponent} from './customer/customer-transactions/customer-transactions.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: CustomerProfileComponent,
  },
  {
    path: 'trading-accounts',
    component: CustomerAccountsComponent
  },
  {
    path: 'transactions',
    component: CustomerTransactionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
