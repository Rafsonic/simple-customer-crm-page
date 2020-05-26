import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {CustomerComponent} from './customer/customer.component';
import { QuickActionsComponent } from './customer/quick-actions/quick-actions.component';
import { SafeHtmlPipe } from './custom-pipes/safe-html.pipe';
import { CustomerHeaderComponent } from './customer/customer-header/customer-header.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { CustomerAccountsComponent } from './customer/customer-accounts/customer-accounts.component';
import { NavigationComponent } from './customer/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    QuickActionsComponent,
    SafeHtmlPipe,
    CustomerHeaderComponent,
    CustomerProfileComponent,
    CustomerAccountsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
