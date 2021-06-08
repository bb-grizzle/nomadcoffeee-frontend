import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { client, isDarkModeVar, isLoggedInVar } from "./apollo";
import Header from "./components/Header";
import routes from "./routes";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Notfound from "./screens/Notfound";
import SignUp from "./screens/SignUp";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { fullHiehgt } from "./utils";
function App() {
	const isLoggedInt = useReactiveVar(isLoggedInVar);
	const isDarkMode = useReactiveVar(isDarkModeVar);

	useEffect(() => {
		window.addEventListener("resize", fullHiehgt);
		return () => {
			window.removeEventListener("resize", fullHiehgt);
		};
	}, []);
	return (
		<ThemeProvider theme={theme(isDarkMode)}>
			<ApolloProvider client={client}>
				<HelmetProvider>
					<GlobalStyle />
					<Header />

					<BrowserRouter>
						<Switch>
							<Route path={routes.home} exact={true}>
								{isLoggedInt ? <Home /> : <Login />}
							</Route>
							<Route path={routes.signUp} exact={true}>
								{isLoggedInt ? <Home /> : <SignUp />}
							</Route>
							<Route>
								<Notfound />
							</Route>
						</Switch>
					</BrowserRouter>
				</HelmetProvider>
			</ApolloProvider>
		</ThemeProvider>
	);
}

export default App;
