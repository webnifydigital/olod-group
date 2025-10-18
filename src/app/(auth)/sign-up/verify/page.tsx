import AuthLayout from "@/features/auth/components/auth-layout";
import VerifyForm from "@/features/auth/components/verify-form";

const EmailVerificationPage = () => {
	return (
		<AuthLayout>
			<VerifyForm />
		</AuthLayout>
	);
};

export default EmailVerificationPage;
