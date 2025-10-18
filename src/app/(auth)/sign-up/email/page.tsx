import AuthLayout from "@/features/auth/components/auth-layout";
import EmailForm from "@/features/auth/components/email-form";

const SignInPage = () => {
	return (
		<AuthLayout>
			<EmailForm />
		</AuthLayout>
	);
};

export default SignInPage;
