import { cn } from "@/lib/utils";
import type * as React from "react";

export type InputProps = React.ComponentProps<"input">;

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				"text-foreground bg-background placeholder:text-muted-foreground selection:bg-primary selection:text-primary border-input flex h-10 w-full min-w-0 rounded-[10px] border px-3 py-6 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
				"focus-visible:ring-primary focus:ring-offset-1 focus-visible:ring-[1.5px] duration-150 ease-linear",
				"aria-invalid:ring-0 aria-invalid:border-destructive",
				className,
			)}
			{...props}
		/>
	);
}

export { Input };
