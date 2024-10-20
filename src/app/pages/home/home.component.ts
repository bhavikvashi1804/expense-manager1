import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule,ButtonModule, PanelModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
