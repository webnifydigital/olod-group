import AboutUs from "@/features/home/components/about-us";
import Banner from "@/features/home/components/banner";
import FAQ from "@/features/home/components/faq";
import Fundraisers from "@/features/home/components/fundraisers";
import Help from "@/features/home/components/help";
import JoinOurCommunity from "@/features/home/components/join-our-community";
import OurMission from "@/features/home/components/our-mission";
import Team from "@/features/home/components/team";

export default function Home() {
	return (
		<main className="h-full w-full bg-background">
			<Banner />
			<AboutUs />
			<Fundraisers />
			<JoinOurCommunity />
			<OurMission />
			<Help />
		{/* 	<Team /> */}
			<FAQ />
		</main>
	);
}
