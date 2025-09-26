import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
	{
		id: 1,
		title: "Home",
		path: "/",
	},
	{
		id: 2,
		title: "Services",
		path: "/services",
	},
	{
		id: 3,
		title: "Stories",
		path: "/stories",
	},
	{
		id: 4,
		title: "About us",
		path: "/about-us",
	},
];

const NavLinks = () => {
	const pathname = usePathname();

	return (
		<ul className="relative font-medium text-[15px] flex items-center gap-9">
			{NAV_LINKS.map((item) => {
				const isActive = pathname === item.path;

				return (
					<li key={item.id} className="text-foreground">
						<Link
							href={item.path}
							className={`relative py-2 transition-colors duration-200 hover:text-primary ${
								isActive ? "text-green-dark" : ""
							}`}
						>
							{item.title}
							{/* Active underline */}
							<span
								className={`absolute -bottom-[17px] left-0 h-[2px] rounded-t-full bg-green-dark transition-all duration-300 ${
									isActive ? "w-full" : "w-0"
								}`}
							/>
							{/* Hover underline */}
							<span
								className={`absolute bottom-0 left-0 h-0.5 bg-green-dark transition-all duration-300 ${
									!isActive ? "w-0 hover:w-full" : "w-0"
								}`}
							/>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default NavLinks;
