import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Plus } from "lucide-react";
import React, { FormEvent, useState } from "react";
import EditMenu from "./EditMenu";
import { MenuFormSchema, menuSchema } from "@/schema/menuSchema";
import { useMenuStore } from "@/store/useMenuStore";
import { useRestaurantStore } from "@/store/useRestaurantStore";
 

const AddMenu = () => {
  const [input, setInput] = useState<MenuFormSchema>({
    name: "",
    description: "",
    price: 0,
    image: undefined,
  });
  const [open, setOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<any>();
  const [error, setError] = useState<Partial<MenuFormSchema>>({});
  const { loading, createMenu } = useMenuStore();
  const {restaurant} = useRestaurantStore();

  
  
};


