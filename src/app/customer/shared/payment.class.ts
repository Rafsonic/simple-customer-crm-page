import {PaymentType} from './payment-type.enum';
import {PaymentStatus} from './payment-status.enum';

export class Payment {
  pid?: number;
  gateway?: string;
  type?: PaymentType;
  amount?: number;
  status?: PaymentStatus;
  datetime?: Date;
  position?: number;

  constructor(init?: Partial<Payment>) {
    Object.assign(this, init);
  }
}
