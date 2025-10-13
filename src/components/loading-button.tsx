import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { LuCircleDashed } from "react-icons/lu";

interface LoadingButtonProps {
	children: React.ReactNode;
	variant:
		| "outline"
		| "default"
		| "destructive"
		| "link"
		| "dark"
		| "white"
		| null
		| undefined;
	onClick?: () => void;
	isLoading?: boolean;
	type?: "button" | "reset" | "submit" | undefined;
	className?: string;
	disabled?: boolean;
}

export default function LoadingButton({
	children,
	variant,
	onClick,
	isLoading,
	type,
	className,
	disabled,
}: LoadingButtonProps) {
	return (
		<Button
			onClick={onClick}
			disabled={disabled}
			variant={variant}
			className={cn(className)}
			type={type}
		>
			<AnimatePresence mode="wait" initial={false}>
				<motion.span
					key={isLoading ? "loading" : "idle"}
					initial={{ opacity: 0, y: -15 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 15 }}
					transition={{ duration: 0.075 }}
					className={cn("flex items-center justify-center gap-1")}
				>
					{isLoading ? (
						<>
							<LuCircleDashed className="h-4 w-4 animate-spin" />
						</>
					) : (
						children
					)}
				</motion.span>
			</AnimatePresence>
		</Button>
	);
}
