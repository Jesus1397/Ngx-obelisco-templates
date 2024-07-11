import { Component } from '@angular/core';
import { OBlockModule } from 'ngx-obelisco-example/block';
import { OButtonModule } from 'ngx-obelisco-example/button';
import { OCollapseModule } from 'ngx-obelisco-example/collapse';
import { NavbarRouteAccount } from 'ngx-obelisco-example/core/models';
import { OFooterModule } from 'ngx-obelisco-example/footer';
import { ONavbarModule } from 'ngx-obelisco-example/navbar';
import { OAlertModule } from 'ngx-obelisco-example/alert';

@Component({
  selector: 'app-bills-summary',
  templateUrl: './bills-summary.component.html',
  styleUrls: ['./bills-summary.component.scss'],
  standalone: true,
  imports: [
    ONavbarModule,
    OBlockModule,
    OButtonModule,
    OCollapseModule,
    OFooterModule,
    OAlertModule,
  ],
})
export class BillsSummaryComponent {
  constructor() {}
  routesAccount: NavbarRouteAccount = {
    title: 'Martina',
    children: [
      {
        title: 'Navegación',
        route: '/',
      },
      {
        title: 'Navegación',
        route: '/',
      },
      {
        title: 'Navegación',
        route: '/',
      },
      {
        title: 'Notificaciones',
        route: '/',
        isWithNotification: true,
      },
      {
        title: 'Cerrar sesión',
        route: '/',
        isDangerTitle: true,
      },
    ],
  };
  public textPaymentsToggle: boolean = false;
  public toggle(): void {
    this.textPaymentsToggle = !this.textPaymentsToggle;
  }
}
