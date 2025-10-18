"use client";

import LoadingButton from "@/components/loading-button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaDollarSign, FaHandsHelping, FaHeart, FaStar } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { type RoleSchema, roleSchema } from "../shcemas";

const Roles = [
	{
		id: "Dreamer",
		label: "Dreamer",
		description:
			"Share your dreams and projects with the worlds. Get support, advice, and funding to make them reality.",
		icon: FaStar,
	},
	{
		id: "DreamLover",
		label: "Dream Lover",
		description:
			"Discover amazing projects and support dreams. Your engagement helps dreams come true.",
		icon: FaHeart,
	},
	{
		id: "DreamMaker",
		label: "Dream Maker",
		description:
			"Expert mentors who provide validated advice and guidance to help Dreamers accelerate their projects.",
		icon: FaHandsHelping,
	},
	{
		id: "DreamFunder",
		label: "Dream Funder",
		description:
			"Financial supporters fund projects through the crowdfunding platform using fiat currency or OLOD Coin cryptocurrency. ",
		icon: FaDollarSign,
	},
];

const RoleForm = () => {
	const router = useRouter();

	const form = useForm<RoleSchema>({
		resolver: zodResolver(roleSchema),
		defaultValues: {
			role: "Dreamer",
		},
	});

	async function onSubmit(values: RoleSchema) {
		router.push("/sign-up/create-account");
		console.log("values", values);
	}
	return (
		<div className="space-y-10">
			<div>
				<h1 className="text-foreground text-[26px] font-semibold">
					What do you want to be?
				</h1>
			</div>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-3 max-w-3xl mx-auto"
				>
					<FormField
						control={form.control}
						name="role"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<RadioGroup
										onValueChange={field.onChange}
										value={field.value}
										className="gap-2"
									>
										{Roles.map((role) => (
											<div
												key={role.id}
												className="relative flex w-full items-start gap-2 rounded-xl border border-input p-4 outline-none hover:bg-border/40 duration-100 ease-linear has-data-[state=checked]:bg-primary/10 has-data-[state=checked]:border-[1.3px] has-data-[state=checked]:border-green-dark"
											>
												<RadioGroupItem
													value={role.id}
													id={`role-${role.id}`}
													aria-describedby={`role-${role.id}-description`}
													className="order-1 after:absolute after:inset-0 !cursor-pointer"
												/>
												<div className="flex grow items-center gap-3">
													<div className="bg-green-dark size-8 flex items-center justify-center rounded-full">
														{<role.icon className="size-3 text-primary" />}
													</div>
													<div className="grid grow gap-2 flex-1">
														<Label
															htmlFor={`role-${role.id}`}
															className="font-medium text-[15px]"
														>
															{role.label}
														</Label>
														<p
															id={`role-${role.id}-description`}
															className="text-xs text-muted-foreground"
														>
															{role.description}
														</p>
													</div>
												</div>
											</div>
										))}
									</RadioGroup>
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
		</div>
	);
};

export default RoleForm;
