import AuthLayout from "@/features/auth/components/auth-layout";
import CreateAccountForm from "@/features/auth/components/create-account-form";

const BasicInfoPage = () => {
	return (
		<AuthLayout>
			<CreateAccountForm />
		</AuthLayout>
	);
};

export default BasicInfoPage;
