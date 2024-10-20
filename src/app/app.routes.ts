import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TranComponent } from './pages/tran/tran.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { StatsComponent } from './pages/stats/stats.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'home', component: HomeComponent},
  { path: 'transactions', component: TranComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'settings', component: SettingsComponent },
];
