import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HighlightModule } from 'ngx-highlightjs';
import { ONavbarModule } from 'ngx-obelisco-example/navbar';
import { OCardModule } from 'ngx-obelisco-example/card';
import { OAccessModule } from 'ngx-obelisco-example/access';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HighlightModule,
    ONavbarModule,
    OCardModule,
    OAccessModule,
  ],
})
export class HomeModule {}
