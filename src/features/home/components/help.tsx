import {
	ScrollVelocityContainer,
	ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { asteriskGreenDarkIcon, asteriskGreenLightIcon } from "@/lib/assets";
import Image from "next/image";

const Help = () => {
	return (
		<section className="section-bottom">
			<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
				<ScrollVelocityContainer className="text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem]">
					<ScrollVelocityRow
						baseVelocity={20}
						direction={1}
						className="font-dm-serif-display bg-green-dark text-primary translate-y-6 py-6 text-5xl rotate-1"
					>
						let&apos;s help each other
						<Image
							src={asteriskGreenLightIcon}
							alt="asterisk_green_light_icon"
							className="mx-10"
							width={30}
							height={30}
						/>
					</ScrollVelocityRow>
					<ScrollVelocityRow
						baseVelocity={20}
						direction={-1}
						className="font-dm-serif-display bg-primary text-green-dark -translate-y-6 py-6 text-5xl -rotate-2"
					>
						let&apos;s help each other{" "}
						<Image
							src={asteriskGreenDarkIcon}
							alt="asterisk_green_dark_icon"
							className="mx-10"
							width={30}
							height={30}
						/>
					</ScrollVelocityRow>
				</ScrollVelocityContainer>
				{/* 				<div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
				<div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
 */}{" "}
			</div>
		</section>
	);
};

export default Help;
