import { isValidPhoneNumber } from "react-phone-number-input";
import * as z from "zod";

export const signInSchema = z.object({
	username: z.string().nonempty({ message: "Username required" }),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters long." }),
});

export const signUpSchema = z.object({
	email: z
		.string()
		.nonempty({ message: "Email address required" })
		.email("Invalid email address"),
});

export const forgotPasswordSchema = z.object({
	email: z
		.string()
		.nonempty({ message: "Email address required" })
		.email("Invalid email address"),
});

export const emailVerificationSchema = z.object({
	code: z.string().min(6, {
		message: "Your code must be 6 characters.",
	}),
});

export const roleSchema = z.object({
	role: z.enum(["Dreamer", "DreamLover", "DreamMaker", "DreamFunder"], {
		message: "You need to select a role.",
	}),
});

export const createAccountSchema = z.object({
	firstName: z.string().nonempty({ message: "Prénom est obligatoire" }),
	lastName: z.string().nonempty({ message: "Nom de famille est obligatoire" }),
	phone: z
		.string()
		.min(1, "Phone number is required")
		.refine((value) => isValidPhoneNumber(value), {
			message: "Please enter a valid phone number",
		}),
	password: z
		.string()
		.min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" }),
});

export const resetPasswordSchema = z
	.object({
		createPassword: z
			.string()
			.min(8, { message: "Password must be at least 8 characters long." }),
		reEnterPassword: z
			.string()
			.min(8, { message: "Password must be at least 8 characters long." }),
	})
	.refine((data) => data.createPassword === data.reEnterPassword, {
		path: ["reEnterPassword"],
		message: "Passwords do not match.",
	});

export type SignUpSchema = z.infer<typeof signUpSchema>;
export type SignInSchema = z.infer<typeof signInSchema>;
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
export type EmailVerificationSchema = z.infer<typeof emailVerificationSchema>;
export type RoleSchema = z.infer<typeof roleSchema>;
export type CreateAccountSchema = z.infer<typeof createAccountSchema>;
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
