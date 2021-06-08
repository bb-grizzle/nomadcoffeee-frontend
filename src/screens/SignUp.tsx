import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import styled from "styled-components";
import FormErrorText from "../components/FormErrorText";
import Input from "../components/Input";
import LinkButton from "../components/LinkButton";
import PageTitle from "../components/PageTitle";
import Submit from "../components/Submit";
import FormLayout from "../layout/FormLayout";
import InputLayout from "../layout/InputLayout";
import routes from "../routes";

type FormType = {
	username: string;
	email: string;
	password: string;
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: ${(props) => props.theme.size.fullHeight};
`;

const InputCustome = styled(Input)`
	margin-bottom: 0.5rem;
`;
const SubmitCustom = styled(Submit)`
	margin-bottom: 0.5rem;
`;
const LinkButtonCustom = styled(LinkButton)`
	margin-top: 1rem;
`;
const SIGNUP_MUTATION = gql`
	mutation createUser($email: String!, $username: String!, $password: String!) {
		createUser(email: $email, username: $username, password: $password) {
			ok
			error
		}
	}
`;

const SignUp = () => {
	const { handleSubmit, register, clearErrors, errors, formState, setError, getValues } = useForm({
		mode: "onChange",
	});
	const { push } = useHistory();
	const onCompleted = (data: any) => {
		const { username, password } = getValues();
		const {
			createUser: { error, ok },
		} = data;

		if (!ok) {
			setError("result", {
				message: error,
			});
		} else {
			push(routes.home, {
				message: "log in with your account!",
				username,
				password,
			});
		}
	};
	const [createUser, { loading }] = useMutation(SIGNUP_MUTATION, { onCompleted });
	const onSubmitValid = (data: FormType) => {
		if (loading) {
			return;
		}
		createUser({ variables: { ...data } });
	};
	const clearError = () => {
		clearErrors("result");
	};

	return (
		<Wrapper>
			<PageTitle title={"coffee | sign up"} />
			<FormLayout title={"sign up"} onSubmit={handleSubmit(onSubmitValid)}>
				<InputLayout>
					<InputCustome
						ref={register({
							required: "username is required!",
							minLength: {
								value: 5,
								message: "min 5",
							},
						})}
						onChange={clearError}
						name={"username"}
						placeholder={"username"}
						type={"text"}
					/>
					<FormErrorText text={errors?.keyword?.message} />
				</InputLayout>

				<InputLayout>
					<InputCustome
						ref={register({
							required: "email is required!",
							minLength: {
								value: 5,
								message: "min 5",
							},
						})}
						onChange={clearError}
						name={"email"}
						placeholder={"email"}
						type={"text"}
					/>
					<FormErrorText text={errors?.keyword?.message} />
				</InputLayout>

				<InputLayout>
					<InputCustome
						ref={register({
							required: "password is required!",
						})}
						onChange={clearError}
						name={"password"}
						placeholder={"password"}
						type={"password"}
					/>
					<FormErrorText text={errors?.password?.message} />
				</InputLayout>
				<SubmitCustom cta={loading ? "Loading..." : "Sign Up"} disabled={!formState.isValid || loading} />
				<FormErrorText text={errors?.result?.message} />
			</FormLayout>
			<LinkButtonCustom link={routes.home} text={"Already have account?"} />
		</Wrapper>
	);
};

export default SignUp;
