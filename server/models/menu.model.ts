import mongoose, { Document } from "mongoose";

export interface IMenu {
    // _id:mongoose.Schema.Types.ObjectId;
    name:string;
    description:string;
    price:number;
    image:string;
}




