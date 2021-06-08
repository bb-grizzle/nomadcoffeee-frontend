import styled from "styled-components";
import Input from "../components/Input";
import Submit from "../components/Submit";
import FormLayout from "../layout/FormLayout";
import { useForm } from "react-hook-form";
import FormErrorText from "../components/FormErrorText";
import InputLayout from "../layout/InputLayout";
import PageTitle from "../components/PageTitle";
import LinkButton from "../components/LinkButton";
import { gql, useMutation } from "@apollo/client";
import { logUserIn } from "../apollo";
import routes from "../routes";
import { useLocation } from "react-router";
type FormType = {
	keyword: string;
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

const LOGIN_MUTATION = gql`
	mutation login($keyword: String!, $password: String!) {
		login(keyword: $keyword, password: $password) {
			ok
			token
			error
		}
	}
`;

const Login = () => {
	const { state } = useLocation<{ message?: string; password?: string; username?: string }>();
	const { register, errors, handleSubmit, clearErrors, setError, formState } = useForm({
		mode: "onChange",
		defaultValues: {
			keyword: state?.username || "",
			password: state?.password || "",
			result: "",
		},
	});

	const onSubmitValid = (data: FormType) => {
		if (loading) {
			return;
		}
		login({
			variables: { ...data },
		});
	};
	const onCompleted = (data: any) => {
		const {
			login: { token, ok, error },
		} = data;

		if (!ok) {
			setError("result", {
				message: error,
			});
		}

		if (token) {
			logUserIn(token);
		}
	};

	const [login, { loading }] = useMutation(LOGIN_MUTATION, {
		onCompleted,
	});
	const clearError = () => {
		clearErrors("result");
	};

	return (
		<Wrapper>
			<PageTitle title={"coffee | log in"} />
			<FormLayout title={"login"} text={state?.message as string} onSubmit={handleSubmit(onSubmitValid)}>
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
						name={"keyword"}
						placeholder={"email or username"}
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
				<SubmitCustom cta={loading ? "Loading..." : "Log In"} disabled={!formState.isValid || loading} />
				<FormErrorText text={errors?.result?.message} />
			</FormLayout>
			<LinkButtonCustom link={routes.signUp} text={"Need sign up?"} />
		</Wrapper>
	);
};

export default Login;
