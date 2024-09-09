import { MenuItem } from "./restaurantType";

export interface CartItem extends MenuItem { 
    quantity:number;
}
