import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OFooterComponent, OFooterModule } from 'ngx-obelisco-example/footer';

import { OCardModule } from 'ngx-obelisco-example/card';
import { OButtonComponent, OButtonModule } from 'ngx-obelisco-example/button';
import { OAccessModule } from 'ngx-obelisco-example/access';
import { PageHeaderComponent } from 'src/app/components/page-header/page-header.component';
import { ODropdownModule } from 'ngx-obelisco-example/dropdown';
import { DropdownNavigationItem } from 'ngx-obelisco-example/core/models';
import { BreadcrumbService } from 'ngx-obelisco-example/core/services';
import { InstitutionalBlockComponent } from 'src/app/components/institutional-block/institutional-block.component';

@Component({
  selector: 'app-goverment-areas',
  standalone: true,
  imports: [
    CommonModule,
    OFooterModule,
    OCardModule,
    OButtonModule,
    OAccessModule,
    PageHeaderComponent,
    ODropdownModule,
    InstitutionalBlockComponent,
  ],
  templateUrl: './goverment-areas-option-two.component.html',
  styleUrls: ['./goverment-areas-option-two.component.scss'],
})
export class GovermentAreasOptionTwoComponent {
  public routes = [
    {
      title: 'Templates',
      route: '/templates',
    },
  ];

  //Inicio de las rutas del Breadcrumb en el Hero de la pagina
  constructor(private readonly breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService.breadcrumb$.next({
      routes: [
        { name: 'Inicio', route: '/' },
        { name: 'Área de Gobierno', route: '/' },
      ],
      defaultRoute: '/route-default',
    });
  }
  //Fin de las rutas del Breadcrumb en el Hero de la pagina

  //Inicio de Array de dropdown en el Hero de la pagina
  public dropdownItem: DropdownNavigationItem[] = [
    {
      text: 'Ministerio de Cultura',
      link: '/',
    },
    {
      text: 'Subsecretaría Gestión Cultural',
      link: '/',
    },
    {
      text: 'Subsecretaría de Políticas Culturales y Nuevas Audiencias',
      link: '/',
    },
    {
      text: 'Ente Autárquico Teatro Colón',
      link: '/',
    },
    {
      text: 'Organigrama',
      link: '/',
    },
    {
      text: 'Guia de Funcionarios',
      link: '/',
    },
    {
      text: 'Contacto',
      link: '/',
    },
  ];
  //Fin de Array de dropdown en el Hero de la pagina
}
