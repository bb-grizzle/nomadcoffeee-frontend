import styled from "styled-components";
import DarkModeBtn from "./DarkModeBtn";
import Logo from "./Logo";
const SHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0%;
	left: 0;
	width: 100%;
	border-bottom: 1px solid gray;
	padding: 0 32px;
	height: 64px;
`;
const Col = styled.div`
	/* border: 1px solid red; */
`;

const ColLeft = styled(Col)``;

const Header = () => {
	return (
		<SHeader>
			<Col>
				<Logo />
			</Col>
			<ColLeft>
				<DarkModeBtn />
			</ColLeft>
		</SHeader>
	);
};

export default Header;
