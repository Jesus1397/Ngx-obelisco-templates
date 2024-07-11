import { Component } from '@angular/core';
import { OButtonModule } from 'ngx-obelisco-example/button';
import {
  DropdownSelectionItem,
  NavbarRouteAccount,
  SearchbarItem,
} from 'ngx-obelisco-example/core/models';
import { OFooterModule } from 'ngx-obelisco-example/footer';
import { ONavbarModule } from 'ngx-obelisco-example/navbar';
import { OSearchModule } from 'ngx-obelisco-example/search';
import { ODropdownModule } from 'ngx-obelisco-example/dropdown';
import { OBadgeModule } from 'ngx-obelisco-example/badge';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  standalone: true,
  imports: [
    ONavbarModule,
    OButtonModule,
    OFooterModule,
    OSearchModule,
    ODropdownModule,
    OBadgeModule,
  ],
})
export class PaymentsComponent {
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
  searchRoutes: SearchbarItem[] = [
    {
      title: 'Inicio',
      route: '/',
    },
    {
      title: 'Introducción',
      route: '/get-started',
    },
    {
      title: 'Componentes',
      route: '/components',
    },
    {
      title: 'Buscador',
      route: '/components/search',
    },
  ];
  dropdownItemsRadio: DropdownSelectionItem[] = [
    {
      id: 'radioOne',
      text: 'Radio 1',
      name: 'radio',
      value: 'radioOne',
    },
    {
      id: 'radioTwo',
      text: 'Radio 2',
      name: 'radio',
      value: 'radioTwo',
    },
    {
      id: 'radioThree',
      text: 'Radio 3',
      name: 'radio',
      value: 'radioThree',
      isDisabled: true,
    },
  ];
  public textPaymentsToggle: boolean = false;
  public toggle(): void {
    this.textPaymentsToggle = !this.textPaymentsToggle;
  }
}
