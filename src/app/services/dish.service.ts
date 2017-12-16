import { Injectable } from '@angular/core';
import { Dish } from '../share/dish';
import { DISHES} from '../share/dishes'

@Injectable()
export class DishService {

  constructor() { }

  getDishes(): Dish[]{
    return DISHES;
  }

}
