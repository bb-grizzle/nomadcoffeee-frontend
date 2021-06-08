import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
	bgColor: "white",
	fontColor: "black",
	formBgColor: "white",
	inputBgColor: "#ebebeb",
	primarayColor: "#faa94c",
	warnColor: "#ff5555",
	darkmodeBtnBgColor: "rgba(0, 0, 0, 0.1)",

	size: {
		fullHeight: `calc(var(--vh, 1vh) * 100)`,
	},
};

const darkTheme: DefaultTheme = {
	inputBgColor: "#545454",
	bgColor: "#202020",
	fontColor: "white",
	formBgColor: "#2c2c2c",
	primarayColor: "#faa94c",
	warnColor: "#ff5555",
	darkmodeBtnBgColor: "rgba(255, 255, 255, 0.2)",

	size: {
		fullHeight: `calc(var(--vh, 1vh) * 100)`,
	},
};

const theme = (isdarkmode: boolean) => (isdarkmode ? darkTheme : lightTheme);
export default theme;
