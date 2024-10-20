import { Component } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Transaction } from '../../domain/Transaction';
import { TransactionsService } from '../../services/transactions.service';

import { ImportsModule } from '../../domain/Modules';
import { AccountService } from '../../services/account.service';
import { AccountLite, AccountType } from '../../domain/Account';
import { Category } from '../../domain/Util';

@Component({
  selector: 'app-tran',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, FormsModule, ImportsModule],
  templateUrl: './tran.component.html',
  styleUrl: './tran.component.css',
})
export class TranComponent {
  tranCategories: Category[] | undefined;
  selectedTranCategory: Category | undefined;

  accountOptions: Category[] | undefined;
  selectedAccount: Category | undefined;
  accounts: AccountLite[] | undefined;

  date: Date[] | undefined;
  date1: Date[] | undefined;
  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];

  constructor(
    private transactionService: TransactionsService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    // Fetch the transactions from the service
    this.transactions = this.transactionService.getMappedTransaction();
    this.filteredTransactions = this.transactions;

    this.tranCategories = this.transactionService
      .getTransactionCategories()
      .map((tran) => ({ name: tran.name, code: tran.code }));

    this.accountOptions = this.accountService.getAccountLites().map((acc) => ({
      name: acc.name,
      code: acc.code,
    }));
  }

  onFilterChange(type: string) {
    let filtered = [...this.transactions]; // Start with all transactions

    // Filter by account
    if (this.selectedAccount) {
      filtered = filtered.filter(
        (tran) => tran.accountName === this.selectedAccount?.name
      );
    }

    if (this.selectedTranCategory) {
      filtered = filtered.filter(
        (tran) => tran.category.name === this.selectedTranCategory?.name
      );
    }

    this.filteredTransactions = filtered;
  }

  onFilterClear() {
    this.filteredTransactions = this.transactions;
    this.selectedAccount = undefined;
    this.selectedTranCategory = undefined;
  }
}
