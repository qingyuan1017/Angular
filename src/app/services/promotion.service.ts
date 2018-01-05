import { Injectable } from '@angular/core';

import{ Promotion } from '../share/promotion';
import{ PROMOTIONS} from '../share/promotions';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    return new Promise(resolve =>{
    setTimeout(() => resolve(PROMOTIONS),2000);
    });
  }

  getPromotion(id: number): Promise<Promotion> {
    return new Promise(resolve =>{
      setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]),2000);
    });
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return new Promise(resolve => {
      setTimeout(() => resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]),2000);
    });  
  }
}
