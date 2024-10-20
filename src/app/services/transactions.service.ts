import { Injectable } from '@angular/core';
import {
  Transaction,
  TransactionCategory,
  TransactionType,
} from '../domain/Transaction';
import { Account } from '../domain/Account';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(private accountService: AccountService) {}

  private tranCategories: TransactionCategory[] = [
    {
      name: 'Transport',
      code: 'TRN',
      transactionType: TransactionType.Expense,
    },
    { name: 'Food', code: 'FOD', transactionType: TransactionType.Expense },
    { name: 'Bills', code: 'BLL', transactionType: TransactionType.Expense },
    { name: 'Personal', code: 'PRS', transactionType: TransactionType.Expense },
    { name: 'Salary', code: 'SLR', transactionType: TransactionType.Income },
    { name: 'Interest', code: 'INT', transactionType: TransactionType.Income },
    { name: 'TopUp', code: 'TPU', transactionType: TransactionType.Transfer },
    { name: 'Refund', code: 'RFD', transactionType: TransactionType.Income },
    { name: 'Cashback', code: 'CBK', transactionType: TransactionType.Income },
  ];

  private tranCategoriesMap = new Map(this.tranCategories.map(cat => [cat.code, cat]));


  private transactions: Transaction[] = [
    {
      date: new Date('2024-10-01'),
      amount: 100,
      account: 'SAV_SBI_01',
      category: this.tranCategoriesMap.get('PRS')!,
      expenseType: TransactionType.Expense,
      note: 'Grocery shopping',
      description: 'Bought groceries for the week.',
    },
    {
      date: new Date('2024-10-02'),
      amount: 250,
      account: 'WAL_APAY',
      category: this.tranCategoriesMap.get('BLL')!,
      expenseType: TransactionType.Expense,
      note: 'Electricity bill',
      description: 'Paid the electricity bill for September.',
    },
    {
      date: new Date('2024-10-03'),
      amount: 1500,
      account: 'SAV_SBI_01',
      category: this.tranCategoriesMap.get('SLR')!,
      expenseType: TransactionType.Income,
      note: 'September salary',
      description: 'Salary credited for September.',
    },
    {
      date: new Date('2024-10-04'),
      amount: 200,
      account: 'CC_SUPER_CASH',
      category: this.tranCategoriesMap.get('TRN')!,
      expenseType: TransactionType.Expense,
      note: 'Bus fare',
      description: 'Weekly bus fare.',
    },
    {
      date: new Date('2024-10-05'),
      amount: 180,
      account: 'WAL_APAY',
      category: this.tranCategoriesMap.get('FOD')!,
      expenseType: TransactionType.Expense,
      note: 'Lunch with friends',
      description: 'Had lunch at a restaurant.',
    },
    {
      date: new Date('2024-10-06'),
      amount: 50,
      account: 'CC_SUPER_CASH',
      category: this.tranCategoriesMap.get('TRN')!,
      expenseType: TransactionType.Expense,
      note: 'Taxi ride',
      description: 'Taxi fare for going to the airport.',
    },
    {
      date: new Date('2024-10-07'),
      amount: 300,
      account: 'SAV_SBI_01',
      category: this.tranCategoriesMap.get('INT')!,
      expenseType: TransactionType.Income,
      note: 'Interest income',
      description: 'Interest credited to savings account.',
    },
    {
      date: new Date('2024-10-08'),
      amount: 80,
      account: 'WAL_APAY',
      category: this.tranCategoriesMap.get('PRS')!,
      expenseType: TransactionType.Expense,
      note: 'Gym membership',
      description: 'Paid for gym membership.',
    },
    {
      date: new Date('2024-10-09'),
      amount: 500,
      account: 'SAV_SBI_01',
      category: this.tranCategoriesMap.get('TPU')!,
      expenseType: TransactionType.Transfer,
      note: 'Wallet top-up',
      description: 'Topped up digital wallet.',
    },
    {
      date: new Date('2024-10-10'),
      amount: 75,
      account: 'WAL_APAY',
      category: this.tranCategoriesMap.get('PRS')!,
      expenseType: TransactionType.Expense,
      note: 'Cinema tickets',
      description: 'Watched a movie.',
    },
    {
      date: new Date('2024-10-11'),
      amount: 120,
      account: 'CC_SUPER_CASH',
      category: this.tranCategoriesMap.get('FOD')!,
      expenseType: TransactionType.Expense,
      note: 'Dinner',
      description: 'Ordered dinner from a restaurant.',
    },
    {
      date: new Date('2024-10-12'),
      amount: 300,
      account: 'CC_SUPER_CASH',
      category: this.tranCategoriesMap.get('BLL')!,
      expenseType: TransactionType.Expense,
      note: 'Water bill',
      description: 'Paid water bill for October.',
    },
    {
      date: new Date('2024-10-13'),
      amount: 100,
      account: 'CC_SUPER_CASH',
      category: this.tranCategoriesMap.get('PRS')!,
      expenseType: TransactionType.Expense,
      note: 'Shopping',
      description: 'Bought some clothes.',
    },
    {
      date: new Date('2024-10-14'),
      amount: 2000,
      account: 'SAV_SBI_01',
      category: this.tranCategoriesMap.get('SLR')!,
      expenseType: TransactionType.Income,
      note: 'Freelance work',
      description: 'Received payment for freelance work.',
    },
    {
      date: new Date('2024-10-15'),
      amount: 150,
      account: 'WAL_APAY',
      category: this.tranCategoriesMap.get('PRS')!,
      expenseType: TransactionType.Expense,
      note: 'Haircut',
      description: 'Got a haircut.',
    },
    {
      date: new Date('2024-10-16'),
      amount: 90,
      account: 'WAL_APAY',
      category: this.tranCategoriesMap.get('PRS')!,
      expenseType: TransactionType.Expense,
      note: 'Book purchase',
      description: 'Bought a book from a bookstore.',
    },
    {
      date: new Date('2024-10-17'),
      amount: 500,
      account: 'SAV_SBI_01',
      category: this.tranCategoriesMap.get('TPU')!,
      expenseType: TransactionType.Transfer,
      note: 'Top-up mobile wallet',
      description: 'Transferred money to the mobile wallet.',
    },
    {
      date: new Date('2024-10-18'),
      amount: 50,
      account: 'CC_SUPER_CASH',
      category: this.tranCategoriesMap.get('PRS')!,
      expenseType: TransactionType.Expense,
      note: 'Coffee',
      description: 'Had coffee at a café.',
    },
    {
      date: new Date('2024-10-19'),
      amount: 350,
      account: 'SAV_SBI_01',
      category: this.tranCategoriesMap.get('INT')!,
      expenseType: TransactionType.Income,
      note: 'Interest income',
      description: 'Interest credited to savings account.',
    },
    {
      date: new Date('2024-10-20'),
      amount: 1000,
      account: 'CC_SUPER_CASH',
      category: this.tranCategoriesMap.get('PRS')!,
      expenseType: TransactionType.Expense,
      note: 'New phone purchase',
      description: 'Bought a new smartphone.',
    },
    {
      date: new Date('2024-10-21'),
      amount: 75,
      account: 'WAL_APAY',
      category: this.tranCategoriesMap.get('PRS')!,
      expenseType: TransactionType.Expense,
      note: 'Gift',
      description: 'Bought a gift for a friend.',
    },
    {
      date: new Date('2024-10-22'),
      amount: 250,
      account: 'SAV_SBI_01',
      category: this.tranCategoriesMap.get('SLR')!,
      expenseType: TransactionType.Income,
      note: 'Consulting payment',
      description: 'Received payment for consulting services.',
    },
    {
      date: new Date('2024-10-23'),
      amount: 400,
      account: 'CC_SUPER_CASH',
      category: this.tranCategoriesMap.get('PRS')!,
      expenseType: TransactionType.Expense,
      note: 'Home decor',
      description: 'Bought decor items for the house.',
    },
    {
      date: new Date('2024-10-24'),
      amount: 180,
      account: 'WAL_APAY',
      category: this.tranCategoriesMap.get('PRS')!,
      expenseType: TransactionType.Expense,
      note: 'Spa',
      description: 'Went to a spa.',
    },
    {
      date: new Date('2024-10-25'),
      amount: 600,
      account: 'CC_SUPER_CASH',
      category: this.tranCategoriesMap.get('PRS')!,
      expenseType: TransactionType.Expense,
      note: 'Travel booking',
      description: 'Flight booking for a vacation.',
    },
    {
      date: new Date('2024-10-26'),
      amount: 50,
      account: 'WAL_APAY',
      category: this.tranCategoriesMap.get('CBK')!,
      expenseType: TransactionType.Income,
      note: 'Cashback',
      description: 'Received cashback on a purchase.',
    },
    {
      date: new Date('2024-10-27'),
      amount: 150,
      account: 'SAV_SBI_01',
      category: this.tranCategoriesMap.get('TPU')!,
      expenseType: TransactionType.Transfer,
      note: 'Top-up wallet',
      description: 'Topped up the mobile wallet.',
    }
  ];

  getTransactions() {
    return this.transactions;
  }

  getMappedTransaction() {
    return this.transactions.map((transaction) => ({
      ...transaction,
      accountName: this.findAccountNameByCode(transaction.account), // Map account string to actual Account object
    }));
  }

  getTransactionCategories() {
    return this.tranCategories;
  }

  findAccountNameByCode(code: string): string | undefined {
    return this.accountService
      .getAccounts()
      .find((account) => account.code === code)?.name;
  }
}
