"use client";

import LoadingButton from "@/components/loading-button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";
import { type SignInSchema, signInSchema } from "../shcemas";

const SignInForm = () => {
	const form = useForm<SignInSchema>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	/* 	const { mutate: loginMutation, isPending } = useLogin(); */

	async function onSubmit(values: SignInSchema) {
		const payload: {
			username: string;
			password: string;
		} = {
			username: values.username,
			password: values.password,
		};

		/* loginMutation(payload, {
			onSuccess: () => {
				form.reset();
			},
		}); */
	}
	return (
		<div>
			<div className="mb-10">
				<h1 className="text-foreground lg:text-[26px] text-xl font-semibold">
					Log in to your Account
				</h1>
				<p className="text-sm text-muted-foreground">
					Enter your credentials to access your account.
				</p>
			</div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-7 max-w-3xl mx-auto"
				>
					<div className="space-y-3">
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											placeholder="Enter your username"
											className=""
											type="text"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<PasswordInput
											placeholder="Enter your password"
											className=""
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Link
							href="/forgot-password"
							className="text-[13px] font-medium text-green-dark hover:underline duration-200 flex justify-end"
						>
							Forgot Password
						</Link>
					</div>

					<LoadingButton
						variant={"dark"}
						type="submit"
						className="w-full py-[24px] relative"
						/* isLoading={isPending}
						disabled={isPending} */
					>
						Sign In{" "}
						<FiLogIn className="size-4 text-primary/60 absolute right-4" />
					</LoadingButton>
				</form>
			</Form>

			<div className="flex items-center gap-2 mt-4">
				<p className="text-sm text-foreground">Don&apos;t have an account?</p>
				<Link
					href="/sign-up/email"
					className="text-sm text-green-dark hover:underline px-0 py-0 h-auto rounded-none"
				>
					Create an Account
				</Link>
			</div>
		</div>
	);
};

export default SignInForm;
