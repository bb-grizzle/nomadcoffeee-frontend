import { useReactiveVar } from "@apollo/client";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { disableDarkMode, enableDarkMode, isDarkModeVar } from "../apollo";
const Wrapper = styled.div`
	width: 56px;
	height: 32px;
	border-radius: 1000px;
	background-color: ${(props) => props.theme.darkmodeBtnBgColor};
	cursor: pointer;
	position: relative;
`;
const Item = styled.div<{ active: boolean }>`
	width: 32px;
	height: 32px;
	position: absolute;
	left: ${(props) => (props.active ? "24px" : "0")};
	top: 0;
	background-color: ${(props) => props.theme.primarayColor};
	border-radius: 1000px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const FontAwesomeIconCustom = styled(FontAwesomeIcon)`
	font-size: 1.2rem;
	color: white;
`;

const DarkModeBtn = () => {
	const isDarkMode = useReactiveVar(isDarkModeVar);

	return (
		<Wrapper onClick={isDarkMode ? disableDarkMode : enableDarkMode}>
			<Item active={isDarkMode}>
				<FontAwesomeIconCustom icon={isDarkMode ? faSun : faMoon} />
			</Item>
		</Wrapper>
	);
};

export default DarkModeBtn;
