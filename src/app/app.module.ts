import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {CustomerComponent} from './customer/customer.component';
import { QuickActionsComponent } from './customer/quick-actions/quick-actions.component';
import { SafeHtmlPipe } from './custom-pipes/safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    QuickActionsComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
