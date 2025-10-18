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
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { IoIosArrowRoundForward } from "react-icons/io";
import { type SignUpSchema, signUpSchema } from "../shcemas";

const EmailForm = () => {
	const router = useRouter();

	const form = useForm<SignUpSchema>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			email: "",
		},
	});

	/* 	const { mutate: loginMutation, isPending } = useLogin(); */

	async function onSubmit(values: SignUpSchema) {
		router.push("/sign-up/verify");
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
		<div className="space-y-10">
			<div>
				<h1 className="text-foreground text-[26px] font-semibold">
					Get Started Now
				</h1>
				<p className="text-sm text-muted-foreground">
					Enter your details below to start creating your profile.
				</p>
			</div>

			<div className="space-y-4">
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
							Next{" "}
							<IoIosArrowRoundForward className="size-5 text-primary absolute right-4" />
						</LoadingButton>
					</form>
				</Form>

				<div className="flex items-center gap-2">
					<p className="text-sm text-foreground">Already have an account?</p>
					<Link
						href="/sign-in"
						className="text-sm text-green-dark hover:underline px-0 py-0 h-auto rounded-none"
					>
						Sign In
					</Link>
				</div>
			</div>
		</div>
	);
};

export default EmailForm;
