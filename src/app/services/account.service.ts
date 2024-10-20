import { Injectable } from '@angular/core';
import { Account, AccountLite, AccountType } from '../domain/Account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private accounts: Account[];

  constructor() {
    this.accounts = [
      {
        code: 'WAL_APAY',
        name: 'Amazon Pay Wallet',
        description: 'Wallet Account for Amazon',
        accountType: AccountType.Wallet,
        balance: 1234.56,
      },
      {
        code: 'SAV_SBI_01',
        name: 'SBI',
        description: 'State Bank of India Saving Account',
        accountType: AccountType.Bank,
        balance: 5000.0,
      },
      {
        code: 'CC_SUPER_CASH',
        name: 'Super Cash Card',
        description: 'Cashback credit card',
        accountType: AccountType.CreditCard,
        balance: -200.0, // Negative balance indicates credit
      },
    ];
  }

  getAccounts() {
    return this.accounts;
  }

  getAccountLites(): AccountLite[] {
    return this.accounts.map((account) => ({
      name: account.name,
      code: account.code,
      accountType: account.accountType,
    }));
  }
}
