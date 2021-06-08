import styled from "styled-components";
const Wrapper = styled.h1`
	color: ${(props) => props.theme.primarayColor};
	font-size: 1.5rem;
	font-weight: bolder;
`;
const Logo = () => {
	return <Wrapper>coffeeeee!</Wrapper>;
};

export default Logo;
