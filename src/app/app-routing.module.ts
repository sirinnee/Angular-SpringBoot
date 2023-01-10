import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionsGroupeComponent } from './promotions-groupe/promotions-groupe.component';

const routes: Routes = [
  {
    path:"",
    component:PromotionsGroupeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
