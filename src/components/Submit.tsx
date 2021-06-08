import styled from "styled-components";
import { InputStyle } from "../styles/shared";
interface SubmitProps {
	cta: string;
	disabled?: boolean;
	className?: string;
}
const SInput = styled(InputStyle)<{ disabled?: boolean }>`
	background-color: ${(props) => props.theme.primarayColor};
	color: white;
	width: 100%;
	cursor: pointer;

	opacity: ${(props) => (props.disabled ? 0.2 : 1)};
`;

const Submit: React.FC<SubmitProps> = ({ cta, disabled, className }) => {
	return <SInput className={className} type={"submit"} value={cta} disabled={disabled} />;
};

export default Submit;
