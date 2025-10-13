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
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
