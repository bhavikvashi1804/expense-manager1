import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header.component';
import { TransactionsService } from './services/transactions.service';
import { Product } from './domain/Product';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent, TableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [TransactionsService],
})
export class AppComponent {
  title = 'expense-manager';

  products!: Product[];

  constructor(private transactionService: TransactionsService) {}

  ngOnInit() {
    this.transactionService.getProductsMini().then((data) => {
      this.products = data;
    });
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
    return null;
  }
}
