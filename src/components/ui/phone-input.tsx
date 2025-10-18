"use client";

import { CheckIcon, ChevronDown, PhoneIcon } from "lucide-react";
import * as React from "react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import type { ControllerFieldState } from "react-hook-form";

// Register only English locale
countries.registerLocale(enLocale);

type PhoneInputProps = Omit<
	React.ComponentProps<"input">,
	"onChange" | "value" | "ref"
> &
	Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
		onChange?: (value: RPNInput.Value) => void;
		fieldState?: ControllerFieldState;
	};

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
	React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
		({ className, onChange, fieldState, ...props }, ref) => {
			// Get all country names in English
			const getLabels = (): Partial<Record<string, string>> => {
				const allCountryCodes = Object.keys(countries.getAlpha2Codes());
				return allCountryCodes.reduce<Partial<Record<string, string>>>(
					(labels, code) => {
						labels[code] = countries.getName(code, "en") || code;
						return labels;
					},
					{},
				);
			};

			const labels = getLabels();

			return (
				<RPNInput.default
					ref={ref}
					className={cn("flex", className)}
					flagComponent={FlagComponent}
					countrySelectComponent={CountrySelect}
					inputComponent={InputComponent}
					focusInputOnCountrySelection={true}
					smartCaret={false}
					labels={labels}
					onChange={(value) => onChange?.(value || ("" as RPNInput.Value))}
					{...props}
				/>
			);
		},
	);
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef<
	HTMLInputElement,
	React.ComponentProps<"input"> & { fieldState?: ControllerFieldState }
>(({ className, fieldState, ...props }, ref) => (
	<Input
		className={cn(
			"rounded-e-xl rounded-s-none",
			fieldState?.error
				? "border-destructive focus:ring-0 bg-red-500"
				: "focus-visible:border-primary",
		)}
		{...props}
		ref={ref}
	/>
));
InputComponent.displayName = "InputComponent";

type CountryEntry = { label: string; value: RPNInput.Country | undefined };

type CountrySelectProps = {
	disabled?: boolean;
	value: RPNInput.Country;
	options: CountryEntry[];
	onChange: (country: RPNInput.Country) => void;
};

const CountrySelect = ({
	disabled,
	value: selectedCountry,
	options: countryList,
	onChange,
}: CountrySelectProps) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					type="button"
					variant="outline"
					className="flex gap-1 rounded-e-none rounded-s-[10px] border-border border-r-0 has-[>svg]:px-4 py-6 focus:z-10 hover:bg-transparent hover:text-foreground"
					disabled={disabled}
				>
					<FlagComponent
						country={selectedCountry}
						countryName={selectedCountry}
					/>
					{selectedCountry && (
						<span className="text-[12px] text-foreground flex-1">
							(+{RPNInput.getCountryCallingCode(selectedCountry)})
						</span>
					)}
					<ChevronDown
						className={cn(
							"-mr-2 size-5 opacity-50",
							disabled ? "hidden" : "opacity-100",
						)}
					/>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[300px] p-0 shadow-lg shadow-foreground/5 rounded-xl">
				<Command className="rounded-xl">
					<CommandInput placeholder="Search country..." />
					<CommandList>
						<ScrollArea className="h-72">
							<CommandEmpty>No data.</CommandEmpty>
							<CommandGroup>
								{countryList.map(({ value, label }) =>
									value ? (
										<CountrySelectOption
											key={value}
											country={value}
											countryName={label}
											selectedCountry={selectedCountry}
											onChange={onChange}
										/>
									) : null,
								)}
							</CommandGroup>
						</ScrollArea>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

interface CountrySelectOptionProps extends RPNInput.FlagProps {
	selectedCountry: RPNInput.Country;
	onChange: (country: RPNInput.Country) => void;
}

const CountrySelectOption = ({
	country,
	countryName,
	selectedCountry,
	onChange,
}: CountrySelectOptionProps) => {
	return (
		<CommandItem className="gap-2" onSelect={() => onChange(country)}>
			<FlagComponent country={country} countryName={countryName} />
			<span className="flex-1 text-sm text-foreground">{countryName}</span>
			<span className="text-sm text-foreground">{`+${RPNInput.getCountryCallingCode(country)}`}</span>
			<CheckIcon
				className={`ml-auto text-foreground size-4 ${country === selectedCountry ? "opacity-100" : "opacity-0"}`}
			/>
		</CommandItem>
	);
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
	const Flag = flags[country];

	return (
		<span className="flex h-4 w-6 [&_svg]:size-full">
			{Flag ? <Flag title={countryName} /> : <PhoneIcon aria-hidden="true" />}
		</span>
	);
};

export { PhoneInput };
