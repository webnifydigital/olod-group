import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { TiHeartFullOutline } from "react-icons/ti";
import { CAMPAIGNS } from "../constants";

const Fundraisers = () => {
	return (
		<section className="section-bottom olood-container">
			<Carousel>
				<div className="flex items-center justify-between mb-8">
					<h2 className="title">Fundraisers In Extreme Need</h2>
					<div className="flex items-center gap-2">
						<CarouselPrevious />
						<CarouselNext />
					</div>
				</div>
				<CarouselContent>
					{CAMPAIGNS.map((item) => (
						<CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
							<div className="border rounded-xl p-3">
								<div className="relative w-full h-60 rounded-xl overflow-hidden mb-6">
									<Image
										src={item.image}
										alt={item.title}
										fill
										className="absolute object-cover"
									/>
								</div>

								<div className="mb-4 space-y-2">
									<p className="text-foreground font-bold text-xl leading-[26px]">
										{item.title}
									</p>
									<p className="text-secondary-foreground font-medium text-sm">
										{item.description}
									</p>
								</div>

								<p className="text-secondary-foreground text-sm font-medium mb-1">
									<span className="text-foreground font-semibold text-base">
										${item.amountRaised}
									</span>{" "}
									raised of ${item.goalAmount} goal
								</p>

								<div className="w-full h-2 rounded-full bg-muted-foreground/20 mb-3">
									<div className="w-[80%] h-full bg-gradient-to-r from-primary to-[#4B9E45] rounded-full" />
								</div>

								<div className="flex items-center justify-between gap-2">
									<div className="flex items-center gap-1">
										<TiHeartFullOutline className="text-red-500" />
										<p className="text-sm text-secondary-foreground font-medium">
											<span className="text-foreground font-semibold">
												{item.supporters}
											</span>{" "}
											supporters
										</p>
									</div>

									<div className="border px-3 py-1 rounded-full">
										<p className="text-[13px] text-secondary-foreground font-medium">
											{item.category}
										</p>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	);
};

export default Fundraisers;
