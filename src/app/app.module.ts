import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {CustomerComponent} from './customer/customer.component';
import {QuickActionsComponent} from './customer/quick-actions/quick-actions.component';
import {SafeHtmlPipe} from './core/custom-pipes/safe-html.pipe';
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
import {CustomerFormComponent} from './customer/customer-form/customer-form.component';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {ButtonSpinnerDirective} from './core/custom-directives/button-spinner.directive';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {CreateTransactionComponent} from './create-transaction/create-transaction.component';
import { CustomerActivitiesComponent } from './customer/customer-activities/customer-activities.component';
import { CustomerNotesComponent } from './customer/customer-notes/customer-notes.component';
import { NotSetPipe } from './core/custom-pipes/not-set.pipe';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import { ChangeStatusComponent } from './change-status/change-status.component';

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
    CustomerTransactionsComponent,
    CustomerFormComponent,
    ButtonSpinnerDirective,
    CreateTransactionComponent,
    CustomerActivitiesComponent,
    CustomerNotesComponent,
    NotSetPipe,
    ChangeStatusComponent,
  ],
  entryComponents: [
    CreateTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule,
    MatChipsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    _MatMenuDirectivesModule,
    MatMenuModule
  ],
  exports: [
    ButtonSpinnerDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

