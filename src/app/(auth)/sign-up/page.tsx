import AuthLayout from "@/features/auth/components/auth-layout";
import SignUpForm from "@/features/auth/components/sign-up-form";

const SignInPage = () => {
	return (
		<AuthLayout>
			<SignUpForm />
		</AuthLayout>
	);
};

export default SignInPage;
