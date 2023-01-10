import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PromotionGroupe } from '../entities/promotion-groupe';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PromotionGroupeServiceService {
  baseUrl:string="http://127.0.0.1:8080/api/v1/PromotionGroupe"
  constructor(public httpClient:HttpClient) {
  }savePromotionGroupe(promotionGroupe:PromotionGroupe)
  {
    const url = this.baseUrl+`/savePromotion`;
    return this.httpClient.post(url,promotionGroupe).pipe(
      map((response:any) => response as PromotionGroupe)
    );
  }
  getById(Id:number)
  {
    const url = this.baseUrl+`/getPromotion/`+Id;
    return this.httpClient.get(url).pipe(
      map((response:any) => response as PromotionGroupe)
    );
  }
  getAll():Observable<PromotionGroupe[]>
  {
    const url = this.baseUrl+`/getAll`;
    return this.httpClient.get(url).pipe(
      map((response:any) => response as PromotionGroupe[])
    );
  }
  deletePromotion(id:number)
  {
    const url = this.baseUrl+`/deletePromotion/`+id;
    return this.httpClient.delete(url).pipe(
      map((response:any) => response as any)
    );
  }
}
