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
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";
import { type SignUpSchema, signUpSchema } from "../shcemas";

const SignUpForm = () => {
	const form = useForm<SignUpSchema>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			email: "",
		},
	});

	/* 	const { mutate: loginMutation, isPending } = useLogin(); */

	async function onSubmit(values: SignUpSchema) {
		/* const payload: {
			email: string;
			password: string;
		} = {
			email: values.email,
		}; */
		/* loginMutation(payload, {
			onSuccess: () => {
				form.reset();
			},
		}); */
	}
	return (
		<>
			<div className="space-y-10">
				<div className="space-y-10">
					<div>
						<h1 className="text-foreground text-[26px] font-semibold">
							Get Started Now
						</h1>
						<p className="text-[13px] text-muted-foreground">
							Enter your details below to start creating your profile.
						</p>
					</div>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-3 max-w-3xl mx-auto"
						>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="Enter your email"
												className=""
												type="email"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<LoadingButton
								variant={"dark"}
								type="submit"
								className="w-full py-[24px] relative"
								/* isLoading={isPending}
						disabled={isPending} */
							>
								Sign Up{" "}
								<FiLogIn className="size-4 text-primary/60 absolute right-4" />
							</LoadingButton>
						</form>
					</Form>
				</div>
				<div className="flex flex-col items-center justify-center">
					<p className="text-foreground text-sm">
						Do not hesitate to contact us
					</p>
					<Link
						href="mailto:support@webnifydigital.com"
						className="text-center text-green-dark text-sm hover:underline"
					>
						support@olodgroup.com
					</Link>
				</div>
			</div>

			<div className="flex justify-end">
				<Link
					href="/sign-in"
					className="text-foreground font-medium underline text-sm"
				>
					Sign In to your Account
				</Link>
			</div>
		</>
	);
};

export default SignUpForm;
