import { Link, useParams } from "react-router-dom";
import FilterPage from "./FilterPage";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Globe, MapPin, X } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import { Skeleton } from "./ui/skeleton";
import { useRestaurantStore } from "@/store/useRestaurantStore";
import { Restaurant } from "@/types/restaurantType";

const SearchPage = () => {
  const params = useParams();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const {
    loading,
    searchedRestaurant,
    searchRestaurant,
    setAppliedFilter,
    appliedFilter,
  } = useRestaurantStore();

  

  
};




