import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../share/dish';
import { Leader } from '../share/leader';
import { DishService } from '../services/dish.service';
import { Promotion } from '../share/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;


  constructor(private dishservice: DishService,private promotionservice: PromotionService,
  private leaderservice: LeaderService, @Inject('BaseURL') private BaseURL){

  }

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish,
      errmess => this.dishErrMess = <any>errmess);
    this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);
    this.leaderservice.getFeaturedLeader().subscribe(leader => this.leader = leader);
    
  }

}
