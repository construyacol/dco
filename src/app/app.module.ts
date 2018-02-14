import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//Material design imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { materialModule } from './material.module';
import 'hammerjs';


//componentes creados por equio de desarrollo
import { FeedComponent } from './feed/feed-component';
import { FaqComponent } from './faq/faq-component';
import { steemitComponent } from './steemit/steemit-component';
import { ListComponent } from './publicaciones/lista-component';
import { DetailsComponent } from './detalle-proyecto/detalle-proyecto.component';
import { NewsComponent } from './admin/news/news-proyecto.component';

// import { proofComponent } from './prueba/proof-component';

import { Routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    FaqComponent,
    steemitComponent,
    ListComponent,
    DetailsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    materialModule,
    Routing,
    MomentModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
