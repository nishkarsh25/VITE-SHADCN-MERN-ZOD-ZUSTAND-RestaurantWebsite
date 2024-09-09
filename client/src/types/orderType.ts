export type CheckoutSessionRequest = {
    cartItems:{
        menuId:string;
        name:string;
        image:string;
        price:string;
        quantity:string;
    }[];
    deliveryDetails:{
        name:string;
        email:string;
        contact:string;
        address:string;
        city:string;
        country:string
    },
    restaurantId:string;
}

