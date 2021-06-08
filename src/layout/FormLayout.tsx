import styled from "styled-components";
interface FormLayoutProps {
	title: string;
	text?: string;
	onSubmit: () => void;
}
const Wrapper = styled.div`
	width: 400px;
	max-width: calc(100% - 32px);
	margin: 0 auto;
	background-color: ${(props) => props.theme.formBgColor};
	box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
	padding: 1rem;
	display: flex;
	flex-direction: column;
`;
const Title = styled.h2`
	font-size: 1.5rem;
	font-weight: bolder;
	text-transform: capitalize;
	margin-bottom: 1rem;
	color: ${(props) => props.theme.fontColor};
`;
const Text = styled.p`
	font-size: 1rem;
	margin-bottom: 1.5rem;
`;
const Form = styled.form``;

const FormLayout: React.FC<FormLayoutProps> = ({ children, title, onSubmit, text }) => {
	return (
		<Wrapper>
			<Title>{title}</Title>
			{text && <Text>{text}</Text>}
			<Form onSubmit={onSubmit}>{children}</Form>
		</Wrapper>
	);
};

export default FormLayout;
