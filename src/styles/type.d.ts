import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		bgColor: string;
		fontColor: string;
		formBgColor: string;
		primarayColor: string;
		warnColor: string;
		darkmodeBtnBgColor: string;
		inputBgColor: string;

		size: {
			fullHeight: string;
		};
	}
}
