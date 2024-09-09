import mongoose, { Document } from "mongoose";

export interface IRestaurant {
    user: mongoose.Schema.Types.ObjectId;
    restaurantName:string;
    city:string;
    country:string;
    deliveryTime:number;
    cuisines: string[];
    imageUrl:string;
    menus:mongoose.Schema.Types.ObjectId[]
}



