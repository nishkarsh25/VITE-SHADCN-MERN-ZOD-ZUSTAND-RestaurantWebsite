import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignupInputState, userSignupSchema } from "@/schema/userSchema";
import { useUserStore } from "@/store/useUserStore";
import { Loader2, LockKeyhole, Mail, PhoneOutgoing, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// typescript me type define krne ka 2 trika hota hai

const Signup = () => {
    const [input, setInput] = useState<SignupInputState>({
        fullname:"",
        email:"",
        password:"", 
        contact:"", 
    });
    const [errors, setErrors] = useState<Partial<SignupInputState>>({});
    const {signup, loading} = useUserStore();
const navigate = useNavigate();
    
  
  
};


