import { Button, buttonVariants } from "@/components/ui/button";
import { banner_1, banner_2 } from "@/lib/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { BsEmojiSmile } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { LuArrowUpRight } from "react-icons/lu";
import { TiHeartFullOutline } from "react-icons/ti";

const Banner = () => {
	return (
		<section className="section-bottom relative section-bottom">
			<div
				className="absolute inset-0 z-0"
				style={{
					background:
						"radial-gradient(125% 125% at 50% 90%, #fff 40%, #c8f167a3 100%)",
				}}
			/>

			<article className="relative z-40 translate-y-10 flex flex-col items-center px-72 pt-20">
				<div className="bg-green-dark px-6 py-1.5 rounded-full mb-6">
					<p className="text-background text-sm font-medium text-center">
						Welcome to the Olod Foundation Gala - A Celebration of
					</p>
				</div>
				<h1 className="text-foreground font-dm-serif-display font-extrabold text-6xl text-center mb-4">
					Great futures are built with a small charity
				</h1>
				<p className="text-secondary-foreground text-center text-lg px-20 mb-12">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
					beatae esse repudiandae tempore.
				</p>

				<div className="flex items-center justify-center gap-2">
					<Button className="px-4">
						<TiHeartFullOutline />
						Join Us
					</Button>
					<Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
						Sign In <LuArrowUpRight />
					</Link>
				</div>
			</article>

			<div className="olood-container relative z-10 grid grid-cols-5 items-end gap-3.5">
				<div className="relative flex flex-col gap-2 h-[430px]">
					<div className="flex-1 flex flex-col justify-between bg-green-dark rounded-4xl p-2">
						<div className="p-5">
							<p className="text-background font-dm-serif-display font-bold text-4xl mb-3">
								65%
							</p>
							<p className="text-background text-[13px] leading-[22px] mb-12">
								17 Thousand People Died, Thousands Injured, Houses and Buildings
								Destroyed. Turkey-Syria Grieves
							</p>
						</div>

						<Button
							variant={"outline"}
							className="w-full bg-white/10 text-white border-white/10 hover:bg-white/10 hover:text-white justify-between px-0 py-6 pr-2 pl-4"
						>
							Join us{" "}
							<div className="bg-primary size-9 flex items-center justify-center rounded-full">
								<LuArrowUpRight className="text-green-dark size-5" />
							</div>
						</Button>
					</div>
					<div className="bg-foreground rounded-4xl p-6 flex items-center gap-5">
						<BsEmojiSmile className="text-white size-12" />
						<p className="text-background font-dm-serif-display font-bold text-2xl leading-7">
							Let them be heard
						</p>
					</div>
				</div>

				<div className="relative h-[310px] overflow-hidden rounded-4xl p-6">
					<div className="relative z-10 h-full flex flex-col justify-between">
						<p className="text-background/70 font-medium text-sm">Health</p>

						<p className="text-background font-dm-serif-display text-2xl leading-7">
							Lifeskills for 2,587 Children in South Africa
						</p>
					</div>

					<Image
						src={banner_1}
						alt="support"
						fill
						className="absolute object-cover"
					/>
					<div className="absolute top-0 left-0 w-full h-full bg-foreground/70" />
				</div>

				<div className="flex-1 bg-[#D2DBDB] rounded-4xl p-2 flex flex-col gap-4 justify-between">
					<p className="text-foreground font-dm-serif-display font-bold text-center px-3 py-7 leading-8 text-[26px] mb-2">
						Join 10,000+ People Dreams
					</p>

					<Button
						variant={"outline"}
						className="w-full bg-foreground/15 text-foreground hover:bg-foreground/15 hover:text-foreground border-none justify-between px-0 py-6 pr-2 pl-4"
					>
						Join Community{" "}
						<div className="bg-foreground size-9 flex items-center justify-center rounded-full">
							<LuArrowUpRight className="text-primary size-5" />
						</div>
					</Button>
				</div>

				<div className="relative h-[310px] overflow-hidden rounded-4xl p-7">
					<div className="relative z-10 h-full flex flex-col justify-between">
						<p className="text-background/70 font-medium text-sm">Education</p>

						<p className="text-background font-dm-serif-display text-2xl leading-7">
							Sponsor food, education to Orphans Kenya
						</p>
					</div>

					<Image
						src={banner_2}
						alt="help"
						fill
						className="absolute object-cover"
					/>
					<div className="absolute top-0 left-0 w-full h-full bg-foreground/70" />
				</div>

				<div className="flex flex-col gap-2 h-[430px]">
					<div className="bg-primary flex flex-col justify-end rounded-4xl p-2 flex-1">
						<div className="p-5">
							<p className="text-green-dark font-dm-serif-display font-bold text-4xl mb-3">
								70%
							</p>
							<p className="text-green-dark text-[13px] leading-[22px] mb-12">
								30 Thousand People Died, Thousands Injured, Houses and Buildings
								Destroyed. Turkey-Syria Grieves
							</p>
						</div>
						<Button
							variant={"outline"}
							className="w-full bg-foreground/15 text-foreground hover:bg-foreground/15 hover:text-foreground border-foreground/5 justify-between px-0 py-6 pr-2 pl-4"
						>
							Explore more{" "}
							<div className="bg-foreground size-9 flex items-center justify-center rounded-full">
								<LuArrowUpRight className="text-primary size-5" />
							</div>
						</Button>
					</div>
					<div className="bg-[#233123] rounded-4xl p-6 flex items-center gap-5">
						<BsSuitHeart className="text-primary size-12" />
						<p className="text-primary font-dm-serif-display font-bold text-2xl">
							Your home for help
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
