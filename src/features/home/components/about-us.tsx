import { Button, buttonVariants } from "@/components/ui/button";
import { about_us } from "@/lib/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { TiHeartFullOutline } from "react-icons/ti";

const AboutUs = () => {
	return (
		<section className="section-bottom olood-container flex items-center gap-28">
			<article className="flex-1">
				<p className="text-green-dark font-bold italic mb-3">About Us</p>
				<h2 className="title mb-6">
					We at the Mission In Agape (MIA) Foundation
				</h2>
				<p className="text-secondary-foreground mb-10">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
					perferendis quo doloremque eligendi repellat vitae quidem cumque
					temporibus dolor numquam nobis consectetur, natus dolore hic non
					excepturi sint voluptate unde. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Laudantium perferendis quo doloremque eligendi
					repellat vitae quidem cumque temporibus dolor numquam nobis
					consectetur, natus dolore hic non excepturi sint voluptate unde. Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Laudantium
					perferendis quo doloremque eligendi repellat vitae quidem cumque
					temporibus dolor numquam nobis consectetur, natus dolore hic non
					excepturi sint voluptate unde.
				</p>

				<div className="flex items-center gap-6">
					<Button className="px-4">
						<TiHeartFullOutline />
						Donate Now
					</Button>
					<Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
						Our Programmes <LuArrowUpRight />
					</Link>
				</div>
			</article>
			<div className="relative flex-1 h-[500px] rounded-3xl overflow-hidden">
				<Image
					src={about_us}
					alt="about us"
					fill
					className="absolute object-cover grayscale"
				/>

				<div className="rounded-3xl p-4 border border-white/10 bg-white/10 backdrop-blur-md absolute bottom-6 left-6 w-[350px]">
					<div className="rounded-3xl bg-white p-6">
						<div className="flex items-center justify-between mb-4">
							<p className="font-dm-serif-display text-green-dark text-lg">Olod Group</p>
							<div className="bg-gradient-to-t from-muted to-transparent rounded-xl px-4 py-2">
								<div className="text-green-dark font-semibold flex items-center text-sm gap-1.5">
									<div className="rounded-full size-2 bg-green-dark" />
									2025
								</div>
							</div>
						</div>

						<p className="text-foreground text-xl font-medium mb-4">
							SME Empowerment Program
						</p>
						<p className="text-foreground mb-8 text-sm">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						</p>

						<Button variant={"secondary"}>
							Join Our Community <LuArrowUpRight />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
