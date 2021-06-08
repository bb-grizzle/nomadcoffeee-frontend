import styled from "styled-components";
interface FormErrorTextProps {
	text?: string;
}
const Text = styled.p`
	font-size: 0.8rem;
	color: ${(props) => props.theme.warnColor};
`;
const FormErrorText: React.FC<FormErrorTextProps> = ({ text }) => {
	return text ? <Text>{text}</Text> : null;
};

export default FormErrorText;
