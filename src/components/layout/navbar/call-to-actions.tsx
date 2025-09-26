import { Button } from "@/components/ui/button";
import { TiHeartFullOutline } from "react-icons/ti";

const CallToActions = () => {
	return (
		<div className="flex items-center gap-2.5">
			<Button variant={"secondary"}>Sign In</Button>
			<Button>
				<TiHeartFullOutline />
				Donate
			</Button>
		</div>
	);
};

export default CallToActions;
