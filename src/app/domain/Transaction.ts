import { Category } from "./Util";

export enum TransactionType {
  Income = 'Income',
  Expense = 'Expense',
  Transfer = 'Transfer',
};

export interface Transaction {
  date: Date; // Date of the transaction
  amount: number; // Amount of the transaction
  account: string;
  accountName?: string
  category: TransactionCategory; // Category of the transaction (e.g., Food, Transport)
  expenseType: TransactionType; // Expense type (e.g., Income, Expense)
  note?: string; // Optional note or additional information
  description: string; // Detailed description of the transaction
};


export interface TransactionCategory extends Category{
  transactionType: TransactionType;
};