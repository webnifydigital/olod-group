"use client";

import LoadingButton from "@/components/loading-button";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
	type EmailVerificationSchema,
	emailVerificationSchema,
} from "../shcemas";

const VerifyForm = () => {
	const router = useRouter();

	const form = useForm<EmailVerificationSchema>({
		resolver: zodResolver(emailVerificationSchema),
		defaultValues: {
			code: "",
		},
	});

	/* 	const { mutate: loginMutation, isPending } = useLogin(); */

	async function onSubmit(values: EmailVerificationSchema) {
		router.push("/sign-up/role");
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
					Email Verification
				</h1>
				<p className="text-sm text-muted-foreground">
					Enter The Verification Code Sent To:
				</p>
				<p className="text-sm text-muted-foreground">dm***sfa@gmail.com</p>
			</div>

			<div className="space-y-4">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-3 max-w-3xl mx-auto"
					>
						<FormField
							control={form.control}
							name="code"
							render={({ field }) => (
								<FormItem className="justify-center w-full">
									<FormControl>
										<InputOTP maxLength={6} {...field}>
											<InputOTPSlot className="w-[74px]" index={0} />
											<InputOTPSlot className="w-[74px]" index={1} />
											<InputOTPSlot className="w-[74px]" index={2} />
											<p className="mx-3">-</p>
											<InputOTPSlot className="w-[74px]" index={3} />
											<InputOTPSlot className="w-[74px]" index={4} />
											<InputOTPSlot className="w-[74px]" index={5} />
										</InputOTP>
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
					<p className="text-sm text-foreground">
						Didn&apos;t receive the Code?
					</p>
					<Button
						variant={"link"}
						className="text-sm text-green-dark hover:underline px-0 py-0 h-auto rounded-none"
					>
						Resend
					</Button>
				</div>
			</div>
		</div>
	);
};

export default VerifyForm;
