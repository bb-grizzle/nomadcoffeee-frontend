import { useReactiveVar } from "@apollo/client";
import styled from "styled-components";
import { isDarkModeVar } from "../apollo";
const PageTitle = styled.h1`
	color: ${(props) => props.theme.fontColor};
	font-size: 5rem;
`;
const Login = () => {
	const isDarkMode = useReactiveVar(isDarkModeVar);
	return (
		<>
			<PageTitle>Login</PageTitle>
			<button onClick={() => isDarkModeVar(isDarkMode ? false : true)}>toggle darkmode</button>
		</>
	);
};

export default Login;
