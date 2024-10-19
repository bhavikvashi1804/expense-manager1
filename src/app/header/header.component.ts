import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Transactions',
        icon: 'pi pi-book',
        routerLink: 'transactions',
      },
      {
        label: 'Accounts',
        icon: 'pi pi-building-columns',
        routerLink: 'accounts',
      },
      {
        label: 'Stats',
        icon: 'pi pi-chart-bar',
        routerLink: 'stats',
        items: [
          {
            label: 'Monthly',
            icon: 'pi pi-calendar',
          },
        ],
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        routerLink: 'settings'
      },
    ];
  }
}
