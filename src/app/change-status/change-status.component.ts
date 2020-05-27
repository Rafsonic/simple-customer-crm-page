import {Component} from '@angular/core';
import {BaseFormComponent} from '../core/base-form-component';
import {CustomerService} from '../customer/shared/customer.service';
import {Customer} from '../customer/shared/customer.class';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.scss']
})
export class ChangeStatusComponent extends BaseFormComponent {

  status: any = {};
  customer: Customer;

  constructor(private customerService: CustomerService,
              private matDialogRef: MatDialogRef<any>,
  ) {
    super();
    this._setupForm();
    this._getCustomer();
  }

  save(): void {
    this.setSaving(true);
    this.customer.status = this.status.status;

    this.subscription = this.customerService.saveCustomer(this.customer).subscribe(() => {
      this.setSaving(false);
      this._closeModal();

    }, () => this.setSaving(false));
  }

  private _closeModal() {
    if (this.matDialogRef.id) {
      this.matDialogRef.close(true);
    }
  }

  private _setupForm() {
    this.formFields = [
      {
        fieldGroupClassName: 'flex flex-wrap -mx-6 ',
        fieldGroup: [
          {
            className: 'w-full px-6',
            fieldGroup: [
              {
                template: '<h4 class="text-2xl my-4 pb-5 text-center text-uppercase font-light">Customer status</h4>'
              },
              {
                key: 'status',
                type: 'select',
                className: '',
                templateOptions: {
                  label: 'Customer Status',
                  required: true,
                  options: [
                    'Pending',
                    'Approved',
                    'Rejected',
                    'Archived',
                  ].map(item => {
                    return {value: item, label: item};
                  })
                },
              },
            ]
          }
        ]
      }
    ];
  }

  private _getCustomer(): void {
    this.subscription = this.customerService.getCustomer().subscribe(customer => {
      this.customer = customer;
    });
  }


}
