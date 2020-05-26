import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {CustomerComponent} from './customer/customer.component';
import {QuickActionsComponent} from './customer/quick-actions/quick-actions.component';
import {SafeHtmlPipe} from './custom-pipes/safe-html.pipe';
import {CustomerHeaderComponent} from './customer/customer-header/customer-header.component';
import {MatTabsModule} from '@angular/material/tabs';
import {CustomerProfileComponent} from './customer/customer-profile/customer-profile.component';
import {CustomerAccountsComponent} from './customer/customer-accounts/customer-accounts.component';
import {NavigationComponent} from './customer/navigation/navigation.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomerTransactionsComponent} from './customer/customer-transactions/customer-transactions.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    QuickActionsComponent,
    SafeHtmlPipe,
    CustomerHeaderComponent,
    CustomerProfileComponent,
    CustomerAccountsComponent,
    NavigationComponent,
    CustomerTransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
