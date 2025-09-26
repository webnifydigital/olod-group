import Image from "next/image";
import { TEAM_MEMBERS } from "../constants";

const Team = () => {
	return (
		<section className="olood-container section-bottom">
			<article className="mb-12 flex flex-col items-center justify-center gap-3">
				<h2 className="title">Meet Our Team</h2>
				<p className="text-muted-foreground text-center text-lg w-[500px]">
					The world&apos;s largest social fundraising platform, optimized for
					your charity in a more easy way
				</p>
			</article>

			<div className="grid grid-cols-4 gap-5">
				{TEAM_MEMBERS.map((team) => (
					<div key={team.id}>
						<div className="relative rounded-2xl overflow-hidden w-full h-[300px] mb-4">
							<Image
								src={team.image}
								alt={team.name}
								fill
								className="absolute object-cover grayscale"
								placeholder="blur"
							/>

							{/* 	<div className="rounded-b-3xl z-30 bg-white dark:bg-dark-2 absolute top-0 right-0 px-6 py-2 before:absolute before:w-8 before:h-8 before:bg-transparent before:-left-8 before:-top-2 before:rounded-tr-3xl before:shadow-[9px_-9px_0_#ffffff] after:absolute after:w-8 after:h-8 after:bg-transparent after:right-0 after:top-6 after:rounded-tr-3xl after:shadow-[9px_-9px_0_#ffffff]">
								<div className="px-10 py-1" />
							</div> */}
						</div>
						<article>
							<p className="text-foreground font-bold text-lg">{team.name}</p>
							<p className="text-muted-foreground text-sm">{team.position}</p>
						</article>
					</div>
				))}
			</div>
		</section>
	);
};

export default Team;
