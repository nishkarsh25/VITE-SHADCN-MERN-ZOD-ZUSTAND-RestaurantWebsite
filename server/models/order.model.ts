import mongoose, { Document } from "mongoose";

type DeliveryDetails = {
    email: string;
    name: string;
    address: string;
    city: string;
}

type CartItems = {
    menuId: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
}




