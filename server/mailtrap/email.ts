import { generatePasswordResetEmailHtml, generateResetSuccessEmailHtml, generateWelcomeEmailHtml, htmlContent } from "./htmlEmail";
import { client, sender } from "./mailtrap";

export const sendVerificationEmail = async (email: string, verificationToken: string) => {
    const recipient = [{ email }];
    try {
        const res = await client.send({
            from: sender,
            to: recipient,
            subject: 'Verify your email',
            html:htmlContent.replace("{verificationToken}", verificationToken),
            category: 'Email Verification'
        });
    } catch (error) {
        console.log(error);
        throw new Error("Failed to send email verification")

    }
}


