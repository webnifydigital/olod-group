import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { star } from "@/lib/assets";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const AuthLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<main className="flex h-screen">
			<div className="w-[50%] bg-white md:px-24 px-5 md:py-10 py-6 flex flex-col justify-between">
				<p className="text-foreground font-bold text-xl">OLOD GROUP</p>

				{children}
			</div>

			<div className="w-[50%] h-full lg:block hidden p-3">
				<div className="relative p-6 rounded-b-4xl rounded-tl-2xl w-full overflow-hidden h-full flex flex-col justify-between bg-primary">
					<div className="mt-8 px-10">
						<h1 className="text-3xl font-medium text-green-dark mb-8">
							Revolutionize QA with Smarter Automation
						</h1>

						<div className="space-y-1">
							<FaQuoteLeft className="text-green-dark text-lg -translate-x-5" />
							<p className="text-dark">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
								saepe modi, impedit quaerat cum odio omnis quo alias at rem,
								reiciendis placeat similique.
							</p>
						</div>

						<Separator className="mb-6 mt-5 bg-green-dark/5" />

						<div className="flex items-center gap-2.5">
							<Avatar className="size-12 border-[1.5px] border-white">
								<AvatarImage
									src="https://github.com/shadcn.png"
									alt="@shadcn"
								/>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<div>
								<p className="text-dark font-medium text-sm">Michael Carter</p>
								<p className="text-dark text-xs">Business Men</p>
							</div>
						</div>
					</div>
					<div className="relative p-16 bg-background w-full rounded-4xl">
						<h2 className="text-green-dark italic font-semibold leading-8 text-2xl mb-6">
							Personalized dental care is the new gold standard for oral health.
						</h2>
						<p className="text-muted-foreground text-sm">
							The resulting interactive reports include updated information
							about approved or investigational treatments for each patient’s
							dental needs.
						</p>

						<div className="z-30 absolute right-1 -top-2 size-[70px] bg-white rounded-full flex justify-center items-center">
							<Image src={star} alt="star" width={34} height={34} />
						</div>
						<div className="rounded-bl-[2rem] bg-primary dark:bg-dark-2 absolute top-0 right-0 transform py-10 px-11 before:absolute before:w-10 before:h-10 before:bg-transparent before:-left-10 before:top-0 before:rounded-tr-[2rem] before:shadow-[11px_-11px_0_#c8f167] dark:before:shadow-[11px_-11px_0_#c8f167] after:absolute after:w-10 after:h-10 after:bg-transparent after:right-0 after:-bottom-10 after:rounded-tr-[2rem] after:shadow-[11px_-11px_0_#c8f167] dark:after:shadow-[11px_-11px_0_#c8f167]" />
					</div>

					<div className="rounded-bl-[2rem] bg-white dark:bg-dark-2 absolute top-0 right-0 transform py-10 px-11 before:absolute before:w-10 before:h-10 before:bg-transparent before:-left-10 before:top-0 before:rounded-tr-[2rem] before:shadow-[11px_-11px_0_#ffffff] dark:before:shadow-[11px_-11px_0_#131920] after:absolute after:w-10 after:h-10 after:bg-transparent after:right-0 after:-bottom-10 after:rounded-tr-[2rem] after:shadow-[11px_-11px_0_#ffffff] dark:after:shadow-[11px_-11px_0_#131920]" />
				</div>
			</div>
		</main>
	);
};

export default AuthLayout;
