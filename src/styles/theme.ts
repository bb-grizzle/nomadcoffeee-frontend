import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
	bgColor: "white",
	fontColor: "black",
};

const darkTheme: DefaultTheme = {
	bgColor: "black",
	fontColor: "white",
};

const theme = (isdarkmode: boolean) => (isdarkmode ? darkTheme : lightTheme);
export default theme;
