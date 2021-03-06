import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
const TOKEN = "token";
const DARK_MODE = "darkmode";
export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const logUserIn = (token: string) => {
	localStorage.setItem(TOKEN, token);
	isLoggedInVar(true);
};
export const logUserOut = () => {
	localStorage.removeItem(TOKEN);
	window.location.reload();
};

export const isDarkModeVar = makeVar(false);

export const enableDarkMode = () => {
	localStorage.setItem(DARK_MODE, "enabled");
	isDarkModeVar(true);
};

export const disableDarkMode = () => {
	localStorage.removeItem(DARK_MODE);
	isDarkModeVar(false);
};

export const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
	cache: new InMemoryCache(),
});
