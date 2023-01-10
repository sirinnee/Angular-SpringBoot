import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialog} from '@angular/material/dialog';import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeancesCoursComponent } from './seances-cours/seances-cours.component';
import { RegroupementComponent } from './regroupement/regroupement.component';
import { PromotionsGroupeComponent } from './promotions-groupe/promotions-groupe.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SeancesCoursComponent,
    RegroupementComponent,
    PromotionsGroupeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialog,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
