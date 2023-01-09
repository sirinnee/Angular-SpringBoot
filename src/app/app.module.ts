import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeancesCoursComponent } from './seances-cours/seances-cours.component';
import { RegroupementComponent } from './regroupement/regroupement.component';
import { PromotionsGroupeComponent } from './promotions-groupe/promotions-groupe.component';
import { PromotionGroupeComponent } from './entities/promotion-groupe/promotion-groupe.component';

@NgModule({
  declarations: [
    AppComponent,
    SeancesCoursComponent,
    RegroupementComponent,
    PromotionsGroupeComponent,
    PromotionGroupeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
