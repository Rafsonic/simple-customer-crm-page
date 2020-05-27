import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Payment} from '../customer/shared/payment.class';
import {BaseFormComponent} from '../core/base-form-component';
import {Customer} from '../customer/shared/customer.class';
import {CustomerService} from '../customer/shared/customer.service';
import {PaymentStatus} from '../customer/shared/payment-status.enum';
import {PaymentType} from '../customer/shared/payment-type.enum';


@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent extends BaseFormComponent implements OnInit {

  transaction: Payment = new Payment();
  customer: Customer;

  constructor(@Inject(MAT_DIALOG_DATA) data: any,
              private matDialogRef: MatDialogRef<any>,
              private customerService: CustomerService) {
    super();
    this.transaction.type = data.type;
    this._getCustomer();
    this._setupForm();
  }

  ngOnInit(): void {
  }


  save(): void {
    this.setSaving(true);

    const transaction = new Payment({
      datetime: new Date(),
      pid: this._generatePid(),
      status: PaymentStatus.APPROVED
    });

    this.customer.wallet.balance = this._calculateBalance();
    this.transaction = {...this.transaction, ...transaction};
    this.customer.payments.push(this.transaction);

    this.subscription = this.customerService.saveCustomer(this.customer).subscribe(() => {
      this.setSaving(true);
      this._closeModal();

    }, () => this.setSaving(true));
  }

  private _calculateBalance(): number {
    const balance = this.customer.wallet.balance;
    const amount = +this.transaction.amount;

    if (this.transaction.type.toLowerCase() === PaymentType.DEPOSIT.toLowerCase()) {
      return balance + amount;
    } else {
      return balance - amount;
    }

  }

  private _closeModal() {
    if (this.matDialogRef.id) {
      this.matDialogRef.close(true);
    }
  }

  private _generatePid(): number {
    const maxPid = Math.max.apply(Math, this.customer.payments.map(payment => payment.pid));
    return maxPid + 1;
  }

  private _getCustomer(): void {
    this.subscription = this.customerService.getCustomer().subscribe(customer => {
      this.customer = customer;
    });
  }

  private _setupForm(): void {
    this.formFields = [
      {
        fieldGroupClassName: 'flex flex-wrap -mx-6 ',
        fieldGroup: [
          {
            className: 'w-full w-full px-6',
            fieldGroup: [
              {
                template: `<h4 class="text-2xl my-4 pb-5 text-center text-uppercase font-light">${this.transaction.type} to your account </h4>`
              },
              {
                fieldGroupClassName: 'flex flex-wrap -mx-4',
                fieldGroup: [
                  {
                    key: 'amount',
                    type: 'input',
                    className: 'w-full px-4',
                    templateOptions: {
                      label: 'Amount',
                      type: 'number',
                      min: 0,
                      required: true,
                    }
                  },
                  {
                    key: 'gateway',
                    type: 'input',
                    className: 'w-full  px-4',
                    templateOptions: {
                      label: 'Gateway',
                      required: true,
                    }
                  },
                ]
              }
            ]
          }
        ]
      },

    ];
  }


}
