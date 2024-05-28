import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ONavbarModule } from 'ngx-obelisco-example/navbar';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { OCardModule } from 'ngx-obelisco-example/card';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { InstitutionalBlockComponent } from './components/institutional-block/institutional-block.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ONavbarModule,
    HighlightModule,
    OCardModule,
    PageHeaderComponent,
    InstitutionalBlockComponent,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
        themePath: 'assets/styles/stackoverflow-light.css',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
