import { Request, Response } from "express";
import { User } from "../models/user.model";
import bcrypt from "bcryptjs";
import crypto from "crypto"; 
import cloudinary from "../utils/cloudinary";
import { generateVerificationCode } from "../utils/generateVerificationCode";
import { generateToken } from "../utils/generateToken";
import { sendPasswordResetEmail, sendResetSuccessEmail, sendVerificationEmail, sendWelcomeEmail } from "../mailtrap/email";

export const signup = async (req: Request, res: Response) => {
    try {
        const { fullname, email, password, contact } = req.body;

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exist with this email"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken =  generateVerificationCode();

        user = await User.create({
            fullname,
            email,
            password: hashedPassword,
            contact: Number(contact),
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
        })
        generateToken(res,user);

        await sendVerificationEmail(email, verificationToken);

        const userWithoutPassword = await User.findOne({ email }).select("-password");
        return res.status(201).json({
            success: true,
            message: "Account created successfully",
            user: userWithoutPassword
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" })
    }
};







