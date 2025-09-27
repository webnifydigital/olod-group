import { Button, buttonVariants } from "@/components/ui/button";
import {
	careIcon,
	helpIcon,
	our_mission,
	supportIcon,
	vitalResourcesIcon,
} from "@/lib/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { TiHeartFullOutline } from "react-icons/ti";

const OurMission = () => {
	return (
		<section className="olood-container section-bottom flex items-center gap-28">
			<div className="relative h-[550px] w-[45%] rounded-t-3xl rounded-bl-3xl rounded-br-4xl overflow-hidden">
				<Image
					src={our_mission}
					alt="Our Mission"
					fill
					className="object-cover absolute"
					placeholder="blur"
				/>

				<div className="rounded-tl-3xl  bg-white absolute bottom-0 right-0 transform px-6 py-4 before:absolute before:w-8 before:h-8 before:bg-transparent before:-left-8 before:bottom-0 before:rounded-br-3xl before:shadow-[9px_9px_0_#ffffff] after:absolute after:w-8 after:h-8 after:bg-transparent after:right-0 after:-top-8 after:rounded-br-3xl after:shadow-[9px_9px_0_#ffffff]">
					<button
						type="button"
						className="text-green-dark hover:text-brand duration-150 ease-linear font-bold flex items-center gap-3"
					>
						<FaPlay />
						Watch Video
					</button>
				</div>
			</div>

			<article className="w-[55%]">
				<p className="text-green-dark font-bold italic mb-3">Our Mission</p>
				<h2 className="title mb-6">We are in a mission to help the helpless</h2>
				<p className="text-secondary-foreground text-[15px] mb-10">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
					perferendis quo doloremque eligendi repellat vitae quidem cumque
					temporibus dolor numquam nobis consectetur, natus dolore hic non
					excepturi sint voluptate unde. Lorem ipsum dolor sit amet consectetur
					adipisicing elit.
				</p>

				<div className="flex items-center gap-6 border-b border-dashed mb-10 pb-10">
					<Button className="px-4">
						<TiHeartFullOutline />
						Join Us
					</Button>
					<Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
						More Details <LuArrowUpRight />
					</Link>
				</div>

				<div className="grid grid-cols-2 gap-8">
					<div>
						<div className="mb-2 flex items-center gap-2.5">
							<Image src={careIcon} alt="care-icon" width={35} height={35} />
							<p className="text-green-dark font-bold text-lg">Care</p>
						</div>
						<p className="text-green-dark/60 text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium.
						</p>
					</div>
					<div>
						<div className="mb-2 flex items-center gap-2.5">
							<Image
								src={supportIcon}
								alt="support-icon"
								width={28}
								height={28}
							/>
							<p className="text-green-dark font-bold text-lg">Support</p>
						</div>
						<p className="text-green-dark/60 text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium.
						</p>
					</div>
					<div>
						<div className="mb-2 flex items-center gap-2.5">
							<Image src={helpIcon} alt="help-icon" width={27} height={27} />
							<p className="text-green-dark font-bold text-lg">Help</p>
						</div>
						<p className="text-green-dark/60 text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium.
						</p>
					</div>
					<div>
						<div className="mb-2 flex items-center gap-2.5">
							<Image
								src={vitalResourcesIcon}
								alt="vital-resources-icon"
								width={25}
								height={25}
							/>
							<p className="text-green-dark font-bold text-lg">
								Vital Resources
							</p>
						</div>
						<p className="text-green-dark/60 text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium.
						</p>
					</div>
				</div>
			</article>
		</section>
	);
};

export default OurMission;
