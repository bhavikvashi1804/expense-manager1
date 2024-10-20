import { Category } from "./Util";

export interface Account extends Category {
  description?: string;
  accountType: AccountType;
  balance: number;
}

export enum AccountType {
  Cash = 'CASH',
  Bank = 'BANK',
  Wallet = 'WALLET',
  CreditCard = 'CREDIT_CARD',
}

export interface AccountLite extends Category{
  accountType: AccountType;
}
