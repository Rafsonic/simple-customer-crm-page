import {Status} from './status.enum';
import {Wallet} from './wallet.class';
import {TradingAccount} from './trading-account.class';
import {Payment} from './payment.class';
import {Note} from './note.class';
import {Activity} from './activity.class';

export class Customer {
  clientId: number;
  firstName: string;
  lastName: string;
  country: string;
  address1: string;
  address2?: string;
  city: string;
  state?: string
  postcode: string;
  phone: string;
  email: string;
  status: Status | string;
  invited_by_affiliate?: string;
  wallet: Wallet;
  trading_accounts: TradingAccount[];
  payments: Payment[];
  notes: Note[];
  activities: Activity[];

  constructor(init?: Partial<Customer>) {
    Object.assign(this, init);
  }

  get fullName() {
    if (this.firstName && this.lastName) {
      return `${this.firstName} ${this.lastName}`;
    }
    if (this.firstName) {
      return this.firstName;
    }
    if (this.lastName) {
      return this.lastName;
    }
  }

}
