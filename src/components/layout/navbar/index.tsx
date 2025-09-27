"use client";

import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from "framer-motion";
import { useState } from "react";
import CallToActions from "./call-to-actions";
import Logo from "./logo";
import NavLinks from "./nav-links";

const Index = () => {
	const { scrollYProgress } = useScroll();
	const [visible, setVisible] = useState(true);

	useMotionValueEvent(scrollYProgress, "change", (current) => {
		if (typeof current === "number") {
			const direction = current! - scrollYProgress.getPrevious()!;

			if (scrollYProgress.get() < 0.05) {
				setVisible(true);
			} else {
				if (direction < 0) {
					setVisible(true);
				} else {
					setVisible(false);
				}
			}
		}
	});

	return (
		<AnimatePresence mode="wait">
			<motion.nav
				initial={{
					opacity: 1,
					y: -100,
				}}
				animate={{
					y: visible ? 0 : -100,
					opacity: visible ? 1 : 0,
				}}
				transition={{
					duration: 0.8,
				}}
				className="sticky top-0 flex items-center justify-center px-20 py-3 bg-white z-50 border-b"
			>
				<Logo />
				{/* <NavLinks /> */}
				{/* <CallToActions /> */}
			</motion.nav>
		</AnimatePresence>
	);
};

export default Index;
