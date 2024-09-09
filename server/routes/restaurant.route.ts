import express from "express"
import { createRestaurant, getRestaurant, getRestaurantOrder, getSingleRestaurant, searchRestaurant, updateOrderStatus, updateRestaurant } from "../controller/restaurant.controller";
import upload from "../middlewares/multer";
import {isAuthenticated} from "../middlewares/isAuthenticated";

const router = express.Router();







