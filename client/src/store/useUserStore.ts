import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import axios from "axios";
import { LoginInputState, SignupInputState } from "@/schema/userSchema";
import { toast } from "sonner";

const API_END_POINT = "http://localhost:8000/api/v1/user"
axios.defaults.withCredentials = true;

type User = {
    fullname:string;
    email:string;
    contact:number;
    address:string;
    city:string;
    country:string;
    profilePicture:string;
    admin:boolean;
    isVerified:boolean;
}

type UserState = {
    user: User | null;
    isAuthenticated: boolean;
    isCheckingAuth: boolean;
    loading: boolean;
    signup: (input:SignupInputState) => Promise<void>;
    login: (input:LoginInputState) => Promise<void>;
    verifyEmail: (verificationCode: string) => Promise<void>;
    checkAuthentication: () => Promise<void>;
    logout: () => Promise<void>;
    forgotPassword: (email:string) => Promise<void>; 
    resetPassword: (token:string, newPassword:string) => Promise<void>; 
    updateProfile: (input:any) => Promise<void>; 
}

