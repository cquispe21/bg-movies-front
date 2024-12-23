import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './features/catalog/catalog.component';
import { CardComponent } from './shared/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './features/movie-detail/movie-detail.component';
import { AppRoutingModule } from './routes/app-routes';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CardComponent,
    MovieDetailComponent
  ],
  imports: [BrowserModule, CommonModule,HttpClientModule,AppRoutingModule], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
