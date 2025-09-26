import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { LuArrowUpRight } from "react-icons/lu";

const FAQ = () => {
	return (
		<section className="olood-container mb-5">
			<div className="bg-primary rounded-xl p-16">
				<article className="mb-10 flex items-center justify-between">
					<div>
						<h2 className="title mb-2">Frequently Asked Questions</h2>
						<p className="text-center text-foreground">
							Have another question? Email us at support@olod.com
						</p>
					</div>

					<Button
						variant={"white"}
						className="justify-between gap-8 px-0 py-6 pr-2 pl-4"
					>
						Conatct Us{" "}
						<div className="bg-green-dark size-9 flex items-center justify-center rounded-full">
							<LuArrowUpRight className="text-primary size-5" />
						</div>
					</Button>
				</article>

				<Accordion
					type="single"
					collapsible
					className="w-full"
					defaultValue="item-1"
				>
					<AccordionItem value="item-1" className="border-foreground/20">
						<AccordionTrigger className="text-green-dark font-semibold text-xl py-7">
							1. What is the purpose of your charity?
						</AccordionTrigger>
						<AccordionContent className="font-medium text-base text-green-dark/80">
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Possimus neque est voluptas necessitatibus sint quam dolore
								excepturi porro repellendus tempora ex voluptatibus dolorem,
								dolorum ipsum rerum magnam illum commodi saepe.
							</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2" className="border-foreground/20">
						<AccordionTrigger className="text-green-dark font-semibold text-xl py-7">
							2. How can I make a donation?
						</AccordionTrigger>
						<AccordionContent className="font-medium text-base text-green-dark/80">
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Possimus neque est voluptas necessitatibus sint quam dolore
								excepturi porro repellendus tempora ex voluptatibus dolorem,
								dolorum ipsum rerum magnam illum commodi saepe.
							</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3" className="border-foreground/20">
						<AccordionTrigger className="text-green-dark font-semibold text-xl py-7">
							3. Is ma donation tax-deductible?
						</AccordionTrigger>
						<AccordionContent className="font-medium text-base text-green-dark/80">
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Possimus neque est voluptas necessitatibus sint quam dolore
								excepturi porro repellendus tempora ex voluptatibus dolorem,
								dolorum ipsum rerum magnam illum commodi saepe.
							</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4" className="border-foreground/20">
						<AccordionTrigger className="text-green-dark font-semibold text-xl py-7">
							4. How are my donations used?
						</AccordionTrigger>
						<AccordionContent className="font-medium text-base text-green-dark/80">
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Possimus neque est voluptas necessitatibus sint quam dolore
								excepturi porro repellendus tempora ex voluptatibus dolorem,
								dolorum ipsum rerum magnam illum commodi saepe.
							</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</section>
	);
};

export default FAQ;
