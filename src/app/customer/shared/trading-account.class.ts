import {AccountType} from './account-type.enum';

export class TradingAccount {
  taid: number;
  accountType: AccountType;
  platform: string;
  balance: number;
}
