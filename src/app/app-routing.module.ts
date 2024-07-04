import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './modules/templates/education/education.component';
import { CultureComponent } from './modules/templates/culture/culture.component';
import { ProcedureComponent } from './modules/templates/procedure/procedure.component';
import { GovermentAreasOptionOneComponent } from './modules/templates/goverment-areas-option-one/goverment-areas-option-one.component';
import { GovermentAreasOptionTwoComponent } from './modules/templates/goverment-areas-option-two/goverment-areas-option-two.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'doc',
    loadChildren: () =>
      import('./modules/doc/doc.module').then((m) => m.DocModule),
  },
  {
    path: 'templates',
    loadChildren: () =>
      import('./modules/section-templates/section-templates.module').then(
        (m) => m.SectionTemplatesModule
      ),
  },
  {
    path: 'templates/education',
    component: EducationComponent,
  },
  {
    path: 'templates/culture',
    component: CultureComponent,
  },
  {
    path: 'templates/procedure',
    component: ProcedureComponent,
  },
  {
    path: 'templates/goverment-areas-option-one',
    component: GovermentAreasOptionOneComponent,
  },
  {
    path: 'templates/goverment-areas-option-two',
    component: GovermentAreasOptionTwoComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
