import { Link } from "react-router-dom";
import styled from "styled-components";

interface LinkButtonProps {
	link: string;
	text: string;
	className?: string;
}

const Text = styled(Link)`
	color: ${(props) => props.theme.fontColor};
	&:hover {
		text-decoration: underline;
	}
`;

const LinkButton: React.FC<LinkButtonProps> = ({ link, text, className }) => {
	return (
		<Text to={link} className={className}>
			{text}
		</Text>
	);
};

export default LinkButton;
