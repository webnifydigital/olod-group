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
import PasswordStrength from "@/components/ui/password-strength";
import { PhoneInput } from "@/components/ui/phone-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoIosArrowRoundForward } from "react-icons/io";
import { type CreateAccountSchema, createAccountSchema } from "../shcemas";

const CreateAccountForm = () => {
	const form = useForm<CreateAccountSchema>({
		resolver: zodResolver(createAccountSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			phone: "",
			password: "",
		},
	});

	async function onSubmit(values: CreateAccountSchema) {
		console.log(values);
	}
	return (
		<div className="space-y-8">
			<div>
				<h1 className="text-foreground lg:text-[26px] text-xl font-semibold">
					Create Account
				</h1>
				<p className="text-sm text-muted-foreground">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
					autem.
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
							name="firstName"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											placeholder="Enter your first name"
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
							name="lastName"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											placeholder="Enter your last name"
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
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<PhoneInput
											value={field.value}
											onChange={field.onChange}
											international
											/* defaultCountry="US" */
											placeholder="Enter phone number"
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
										<PasswordStrength field={field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<LoadingButton
						variant={"dark"}
						type="submit"
						className="w-full py-[24px] relative"
						/* isLoading={isPending}
						disabled={isPending} */
					>
						Account Confirm{" "}
						<IoIosArrowRoundForward className="size-5 text-primary absolute right-4" />
					</LoadingButton>
				</form>
			</Form>
		</div>
	);
};

export default CreateAccountForm;
