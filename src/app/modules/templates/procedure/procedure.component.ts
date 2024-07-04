import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ONavbarModule } from 'ngx-obelisco-example/navbar';
import { OFooterComponent, OFooterModule } from 'ngx-obelisco-example/footer';
import { OListModule } from 'ngx-obelisco-example/list';
import {
  OCollapseComponent,
  OCollapseModule,
} from 'ngx-obelisco-example/collapse';
import { OBlockModule } from 'ngx-obelisco-example/block';
import { OButtonComponent, OButtonModule } from 'ngx-obelisco-example/button';
import { Collapse, Step } from 'ngx-obelisco-example/core/models';
import { PageHeaderComponent } from 'src/app/components/page-header/page-header.component';
import { BreadcrumbService } from 'ngx-obelisco-example/core/services';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    OFooterModule,
    ONavbarModule,
    PageHeaderComponent,
    OListModule,
    OCollapseModule,
    OBlockModule,
    OButtonModule,
  ],
})
export class ProcedureComponent {
  //Lista de pasos
  public stepItem: Step = {
    title: 'Título del paso',
    description:
      'En esta descripción del paso se muestran los detalles principales de las acciones que deberá realizar la persona usuaria posteriormente.',
  };
  public stepItems: Step[] = [];

  //Colapsable
  public collapseItem: Collapse = {
    title: 'Título',
    content:
      'Esta es la descripción que se encuentra dentro de un colapsable. Recomendamos no utilizar demasiado texto, para generar una lectura óptima.',
  };

  public collapseItems: Collapse[] = [];

  //Breadcrumb
  constructor(private readonly breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService.breadcrumb$.next({
      routes: [
        { name: 'Jefe de Gobierno', route: '/' },
        { name: 'Trámites', route: '/' },
        { name: 'Título del trámite', route: '/' },
      ],
      defaultRoute: '/route-default',
    });

    for (let i = 0; i < 5; i++) {
      if (i < 3) {
        this.stepItems.push(this.stepItem);
      }
      this.collapseItems.push(this.collapseItem);
    }
  }
}
