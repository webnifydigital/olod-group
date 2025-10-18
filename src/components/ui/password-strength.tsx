"use client";

import { Input } from "@/components/ui/input";
import type { CreateAccountSchema } from "@/features/auth/shcemas";
import { CheckIcon, EyeClosedIcon, EyeIcon, XIcon } from "lucide-react";
import { useId, useMemo, useState } from "react";
import type { ControllerRenderProps } from "react-hook-form";

type PasswordInputProps = {
	field: ControllerRenderProps<CreateAccountSchema, "password">;
	label?: string;
};

export default function PasswordStrength({ field }: PasswordInputProps) {
	const id = useId();
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => setIsVisible((prev) => !prev);

	const checkStrength = (pass: string) => {
		const requirements = [
			{ regex: /.{8,}/, text: "Au moins 8 caractères" },
			{ regex: /[0-9]/, text: "Au moins 1 numéro" },
			{ regex: /[a-z]/, text: "Au moins 1 lettre minuscule" },
			{ regex: /[A-Z]/, text: "Au moins 1 lettre majuscule" },
			{ regex: /[^A-Za-z0-9]/, text: "Au moins 1 caractère spécial" },
		];
		return requirements.map((req) => ({
			met: req.regex.test(pass),
			text: req.text,
		}));
	};

	const strength = checkStrength(field.value || "");
	const strengthScore = useMemo(
		() => strength.filter((req) => req.met).length,
		[strength],
	);

	const getStrengthColor = (score: number) => {
		if (score === 0) return "bg-border";
		if (score <= 1) return "bg-red-500";
		if (score <= 2) return "bg-orange-300";
		if (score <= 3) return "bg-orange-400";
		if (score === 4) return "bg-orange-600";
		return "bg-primary";
	};

	return (
		<div>
			{/* Input */}
			<div className="relative">
				<Input
					id={id}
					className="pe-9 placeholder:translate-y-1"
					placeholder="*********"
					type={isVisible ? "text" : "password"}
					{...field}
				/>
				<button
					type="button"
					onClick={toggleVisibility}
					className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center text-foreground"
				>
					{isVisible ? <EyeIcon size={16} /> : <EyeClosedIcon size={16} />}
				</button>
			</div>

			{/* Strength bar */}
			<div
				className="bg-gray-50 mt-3 mb-2 h-1 w-full overflow-hidden rounded-full"
				aria-valuenow={strengthScore}
				aria-valuemin={0}
				aria-valuemax={strength.length}
			>
				<div
					className={`h-full ${getStrengthColor(strengthScore)} transition-all duration-500 ease-out`}
					style={{ width: `${(strengthScore / strength.length) * 100}%` }}
				/>
			</div>

			{/* Requirements */}
			<ul className="space-y-1.5" aria-label="Password requirements">
				{strength.map((req, index) => (
					<li key={index} className="flex items-center gap-2">
						{req.met ? (
							<CheckIcon size={13} className="text-green" />
						) : (
							<XIcon size={13} className="text-foreground/80" />
						)}
						<span
							className={`text-xs ${req.met ? "text-green" : "text-foreground"}`}
						>
							{req.text}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
