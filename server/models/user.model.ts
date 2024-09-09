import mongoose, { Document, Model } from "mongoose";

export interface IUser {
    fullname:string;
    email:string;
    password:string;
    contact:number;
    address:string;
    city:string;
    country:string;
    profilePicture:string;
    admin:boolean;
    lastLogin?: Date;
    isVerified?: boolean;
    resetPasswordToken?:string;
    resetPasswordTokenExpiresAt?:Date;
    verificationToken?:string;
    verificationTokenExpiresAt?:Date
}

export interface IUserDocument extends IUser, Document {
    createdAt:Date;
    updatedAt:Date;
}



