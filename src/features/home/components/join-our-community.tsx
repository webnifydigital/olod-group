import { Button } from "@/components/ui/button";
import { join_1, join_2, join_3, join_4 } from "@/lib/assets";
import Image from "next/image";

const JoinOurCommunity = () => {
	return (
		<article className="section-bottom py-10 relative">
			<div
				className="absolute inset-0 z-0"
				style={{
					background: "#ffffff",
					backgroundImage: `
        radial-gradient(
          circle at top right,
          #f3fcdd,
          transparent 70%
        )
      `,
					filter: "blur(80px)",
					backgroundRepeat: "no-repeat",
				}}
			/>

			<div className="flex flex-col items-center justify-center relative">
				<h2 className="text-center text-foreground text-2xl w-[600px]">
					Join our community for supporting dreams and be a part of a positive change in
					the world. With over:
				</h2>

				<h3 className="text-center font-dm-serif-display text-foreground text-8xl font-medium my-10">
					120,859+
				</h3>

				<p className="text-center text-foreground font-medium mb-3">
					people already joining
				</p>
				<Button variant={"secondary"}>Yes I want to join community</Button>
			</div>

			<Image
				src={join_1}
				alt="join_1"
				width={80}
				height={110}
				className="grayscale absolute left-[350px] bottom-10 w-[80px] h-[90px] object-cover rounded-xl"
				placeholder="blur"
			/>

			<Image
				src={join_2}
				alt="join_2"
				width={80}
				height={110}
				className="grayscale absolute left-[240px] top-16 w-[80px] h-[100px] object-cover rounded-xl"
				placeholder="blur"
			/>

			<Image
				src={join_3}
				alt="join_3"
				width={80}
				height={110}
				className="grayscale absolute right-[350px] bottom-10 w-[80px] h-[90px] object-cover rounded-xl"
				placeholder="blur"
			/>

			<Image
				src={join_4}
				alt="join_4"
				width={80}
				height={110}
				className="grayscale absolute right-[240px] top-16 w-[80px] h-[100px] object-cover rounded-xl"
				placeholder="blur"
			/>
		</article>
	);
};

export default JoinOurCommunity;
