import { useReactiveVar } from "@apollo/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { isDarkModeVar, isLoggedInVar } from "./apollo";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Notfound from "./screens/Notfound";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
function App() {
	const isLoggedInt = useReactiveVar(isLoggedInVar);
	const isDarkMode = useReactiveVar(isDarkModeVar);
	return (
		<ThemeProvider theme={theme(isDarkMode)}>
			<GlobalStyle />

			<BrowserRouter>
				<Switch>
					<Route path="/" exact={true}>
						{isLoggedInt ? <Home /> : <Login />}
					</Route>
					<Route>
						<Notfound />
					</Route>
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
