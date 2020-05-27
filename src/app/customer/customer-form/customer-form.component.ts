import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseFormComponent} from '../../core/base-form-component';
import {Customer} from '../shared/customer.class';
import {CustomerService} from '../shared/customer.service';
import {QuickActions} from '../quick-actions/shared/quick-actions.class';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent extends BaseFormComponent implements OnInit {

  @Output() quickActionEvent = new EventEmitter<QuickActions>();
  customer: Customer = new Customer();

  constructor(private customerService: CustomerService) {
    super();
    this._getCustomer();
  }

  ngOnInit(): void {
  }

  goBack(): void {
    const action = new QuickActions({
      key: 'edit-customer'
    })

    this.quickActionEvent.emit(action);
  }

  save(): void {
    this.setSaving(true);
    this.customerService
      .saveCustomer(this.customer)
      .subscribe(customer => {
        this.setSaving(false);
        this.goBack();
      }, () => {
        this.setSaving(false);
      });
  }

  private _setupForm() {
    this.formFields = [
      {
        fieldGroupClassName: 'flex flex-wrap -mx-6 ',
        fieldGroup: [
          {
            className: 'w-full md:w-1/2 px-6',
            fieldGroup: [
              {
                fieldGroupClassName: 'flex flex-wrap -mx-4',
                fieldGroup: [
                  {
                    key: 'firstName',
                    type: 'input',
                    className: 'w-full md:w-1/2 px-4',
                    templateOptions: {
                      label: 'First Name',
                      required: true,
                    }
                  },
                  {
                    key: 'lastName',
                    type: 'input',
                    className: 'w-full md:w-1/2 px-4',
                    templateOptions: {
                      label: 'Last Name',
                      required: true,
                    }
                  },
                ]
              },
              {
                fieldGroupClassName: 'flex flex-wrap -mx-4',
                fieldGroup: [
                  {
                    key: 'phone',
                    type: 'input',
                    className: 'w-full md:w-1/2 px-4',
                    templateOptions: {
                      label: 'Phone Number',
                      required: true,
                    }
                  },
                  {
                    key: 'email',
                    type: 'input',
                    className: 'w-full md:w-1/2 px-4',
                    templateOptions: {
                      label: 'Email',
                      required: true,
                    }
                  },
                  {
                    key: 'additionalDetails',
                    type: 'textarea',
                    className: 'w-full px-4',
                    templateOptions: {
                      label: 'Invited affiliate full name',
                    },
                  }
                ]
              },
            ]
          },
          {
            className: 'w-full md:w-1/2 px-6',
            fieldGroup: [
              {
                fieldGroupClassName: 'flex flex-wrap -mx-4',
                fieldGroup: [
                  {
                    key: 'address1',
                    type: 'input',
                    className: 'w-full md:w-1/2 px-4',
                    templateOptions: {
                      label: 'Address 1',
                      required: true,
                    }
                  },
                  {
                    key: 'address2',
                    type: 'input',
                    className: 'w-full md:w-1/2 px-4',
                    templateOptions: {
                      label: 'Address 2',
                      required: false,
                    }
                  },
                ]
              },
              {
                fieldGroupClassName: 'flex flex-wrap -mx-4',
                fieldGroup: [
                  {
                    key: 'city',
                    type: 'input',
                    className: 'w-full md:w-1/2 px-4',
                    templateOptions: {
                      label: 'City',
                      required: true,
                    }
                  },
                  {
                    key: 'postcode',
                    type: 'input',
                    className: 'w-full md:w-1/2 px-4',
                    templateOptions: {
                      label: 'Postcode',
                      required: true,
                    }
                  },
                  {
                    key: 'state',
                    type: 'input',
                    className: 'w-full md:w-1/2 px-4',
                    templateOptions: {
                      label: 'State',
                      required: true,
                    }
                  },
                  {
                    key: 'country',
                    type: 'input',
                    className: 'w-full md:w-1/2 px-4',
                    templateOptions: {
                      label: 'Country',
                      required: true,
                    }
                  }
                ]
              },
            ]
          }
        ]
      },

    ];
  }


  private _getCustomer(): void {
    this.subscription = this.customerService
      .getCustomer()
      .subscribe(data => {
        this.customer = {...data} as Customer;
        this._setupForm();
      });
  }

}
