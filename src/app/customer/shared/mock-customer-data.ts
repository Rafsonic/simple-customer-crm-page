import {Customer} from './customer.class';
import {Status} from './status.enum';
import {AccountType} from './account-type.enum';
import {PaymentType} from './payment-type.enum';
import {PaymentStatus} from './payment-status.enum';

export const CUSTOMER: Customer = new Customer({
  clientId: 10001,
  firstName: 'John',
  lastName: 'Doe',
  country: 'John',
  address1: 'Test address',
  city: 'Test City',
  postcode: '66411',
  phone: '+123123123123',
  email: 'john.doe@test.com',
  status: Status.APPROVED,
  invited_by_affiliate: 'Thomas Johnson',
  wallet: {
    currency: 'EUR',
    balance: 3000.00
  },
  trading_accounts: [
    {
      taid: 320001,
      accountType: AccountType.LIVE,
      platform: 'pt1',
      balance: 990.00
    },
    {
      taid: 320002,
      accountType: AccountType.LIVE,
      platform: 'pt2',
      balance: 672.10
    },
    {
      taid: 720001,
      accountType: AccountType.DEMO,
      platform: 'pt1',
      balance: 10000.00
    }
  ],
  payments: [
    {
      position: 1,
      pid: 1425552,
      gateway: 'paysafe',
      type: PaymentType.DEPOSIT,
      amount: 300.00,
      status: PaymentStatus.PENDING,
      datetime: new Date('2020-05-21 14:54:32')
    },
    {
      position: 2,
      pid: 1425564,
      gateway: 'paypal',
      type: PaymentType.DEPOSIT,
      amount: 1154.00,
      status: PaymentStatus.APPROVED,
      datetime: new Date('2020-05-21 14:58:32')
    },
    {
      position: 3,
      pid: 1425565,
      gateway: 'paypal',
      type: PaymentType.WITHDRAWAL,
      amount: 800.00,
      status: PaymentStatus.PENDING,
      datetime: new Date('2020-05-22 11:24:37')
    },
    {
      position: 4,
      pid: 1425577,
      gateway: 'skrill',
      type: PaymentType.DEPOSIT,
      amount: 1000.00,
      status: PaymentStatus.DECLINED,
      datetime: new Date('2020-05-22 11:26:39')
    },
    {
      position: 5,
      pid: 1425579,
      gateway: 'paysafe',
      type: PaymentType.WITHDRAWAL,
      amount: 224.54,
      status: PaymentStatus.APPROVED,
      datetime: new Date('2020-05-23 12:04:01')
    },
    {
      position: 6,
      pid: 1425581,
      gateway: 'paypal',
      type: PaymentType.DEPOSIT,
      amount: 750.00,
      status: PaymentStatus.APPROVED,
      datetime: new Date('2020-05-23 19:31:12')
    },
    {
      position: 7,
      pid: 1425589,
      gateway: 'skrill',
      type: PaymentType.WITHDRAWAL,
      amount: 990.20,
      status: PaymentStatus.DECLINED,
      datetime: new Date('2020-05-23 20:15:56')
    }
  ],
  notes: [
    {
      datetime: new Date('2020-05-14 09:17:36'),
      noteText: 'Client was requested to upload clearer ID card'
    },
    {
      datetime: new Date('2020-05-15 11:26:48'),
      noteText: 'Client transferred from tier 2 to 1'
    },
    {
      datetime: new Date('2020-05-16 08:22:24'),
      noteText: 'Client requested to have his address updated as he recently moved'
    }
  ],
  activities: [
    {
      datetime: new Date('2020-05-12 09:59:21'),
      activityTest: 'Account approved by officer \'Jennie\''
    },
    {
      datetime: new Date('2020-05-22 11:26:40'),
      activityTest: 'Deposit declined by system'
    },
    {
      datetime: new Date('2020-05-23 20:15:57'),
      activityTest: 'Withdrawal cancelled by user'
    }
  ]
});
