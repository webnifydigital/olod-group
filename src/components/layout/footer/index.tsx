import { Button } from "@/components/ui/button";
import Link from "next/link";
import type React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiHeartFullOutline } from "react-icons/ti";

interface Footer7Props {
	logo?: {
		url: string;
		src: string;
		alt: string;
		title: string;
	};
	sections?: Array<{
		title: string;
		links: Array<{ name: string; href: string }>;
	}>;
	description?: string;
	socialLinks?: Array<{
		icon: React.ReactElement;
		href: string;
		label: string;
	}>;
	copyright?: string;
	legalLinks?: Array<{
		name: string;
		href: string;
	}>;
}

const defaultSections = [
	{
		title: "Information",
		links: [
			{ icon: "", name: "145 Fitness lan, City Example", href: "#" },
			{ icon: "", name: "(111) 234-5678", href: "#" },
			{ icon: "", name: "olod@gmail.com", href: "#" },
		],
	},
	{
		title: "Quick Links",
		links: [
			{ name: "About Us", href: "#" },
			{ name: "Campaigns", href: "#" },
			{ name: "Donate", href: "#" },
		],
	},
	{
		title: "Resources",
		links: [
			{ name: "Success Story", href: "#" },
			{ name: "Help & FAQs", href: "#" },
			{ name: "Our Blog", href: "#" },
		],
	},
];

const defaultSocialLinks = [
	{
		icon: (
			<div className="size-9 flex items-center justify-center bg-background rounded-full">
				<FaInstagram className="text-green-dark size-5" />
			</div>
		),
		href: "#",
		label: "Instagram",
	},
	{
		icon: (
			<div className="size-9 flex items-center justify-center bg-background rounded-full">
				<FaFacebook className="text-green-dark size-5" />
			</div>
		),
		href: "#",
		label: "Facebook",
	},
	{
		icon: (
			<div className="size-9 flex items-center justify-center bg-background rounded-full">
				<FaXTwitter className="text-green-dark size-5" />
			</div>
		),
		href: "#",
		label: "Twitter",
	},
	{
		icon: (
			<div className="size-9 flex items-center justify-center bg-background rounded-full">
				<FaLinkedin className="text-green-dark size-5" />
			</div>
		),
		href: "#",
		label: "LinkedIn",
	},
];

const defaultLegalLinks = [
	{ name: "Terms and Conditions", href: "#" },
	{ name: "Privacy Policy", href: "#" },
];

const Footer = ({
	logo = {
		url: "/",
		src: "/",
		alt: "logo",
		title: "olod.com",
	},
	sections = defaultSections,
	description = "A collection of components for your startup business or side project.",
	socialLinks = defaultSocialLinks,

	legalLinks = defaultLegalLinks,
}: Footer7Props) => {
	return (
		<footer className="mx-20 mb-4">
			<div className="bg-green-dark rounded-xl px-12 pt-10 pb-6">
				<div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
					<div className="w-[60%] flex flex-col justify-between gap-6 lg:items-start">
						{/* Logo */}
						<div className="flex items-center gap-2 lg:justify-start">
							<Link
								href={logo.url}
								className="font-dm-serif-display text-background text-2xl"
							>
								Olod Group
							</Link>
						</div>
						<p className="max-w-[70%] text-sm text-background">{description}</p>
						<ul className="flex items-center space-x-6 text-muted-foreground">
							{socialLinks.map((social) => (
								<li
									key={social.href}
									className="font-medium hover:text-primary"
								>
									<Link href={social.href} aria-label={social.label}>
										{social.icon}
									</Link>
								</li>
							))}
						</ul>

						<div className="bg-background rounded-full w-full flex items-center p-1">
							<input
								className="outline-none border-none px-4 py-2.5 text-sm flex-1 text-foreground font-medium"
								placeholder="Enter your email address"
							/>
							<button
								type="button"
								className="bg-primary text-green-dark rounded-full px-8 py-2.5 cursor-pointer text-sm font-semibold"
							>
								Submit
							</button>
						</div>
					</div>
					<div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
						{sections.map((section) => (
							<div key={section.title}>
								<h3 className="mb-4 font-bold text-background italic">
									{section.title}
								</h3>
								<ul className="space-y-3 text-sm text-background/70">
									{section.links.map((link) => (
										<li
											key={link.name}
											className="font-medium hover:text-primary"
										>
											<a href={link.href}>{link.name}</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
				<div className="mt-8 flex items-center justify-between gap-4 border-t border-background/10 pt-6">
					<p className="text-background text-sm font-medium">
						© 2025{" "}
						{
							<Link href="/" className="text-primary underline">
								Olod
							</Link>
						}{" "}
						| All rights reserved.
					</p>
					<Button>
						<TiHeartFullOutline /> Donate now
					</Button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
