import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerProfileComponent} from './customer/customer-profile/customer-profile.component';
import {CustomerAccountsComponent} from './customer/customer-accounts/customer-accounts.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: CustomerProfileComponent
  },
  {
    path: 'trading-accounts',
    component: CustomerAccountsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
