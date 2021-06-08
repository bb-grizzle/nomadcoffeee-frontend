import styled from "styled-components";
interface InputLayoutProps {}
const Wrapper = styled.div`
	margin-bottom: 1rem;
	width: 100%;
`;
const InputLayout: React.FC<InputLayoutProps> = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

export default InputLayout;
