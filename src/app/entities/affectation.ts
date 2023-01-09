import { PromotionGroupe } from "./promotion-groupe";

export class Affectation {
  id!:number;
  dateDebutEns!:Date;
  dateFinEns!:Date;
	dateExamen!:Date;

 promotionGroupeEAD!:PromotionGroupe;
constructor(){
  this.dateDebutEns=new Date();
  this.dateFinEns=new Date();
  this.dateExamen=new Date();
  this.promotionGroupeEAD=new PromotionGroupe();
}
}
