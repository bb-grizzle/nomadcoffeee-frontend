import { forwardRef } from "react";
import styled from "styled-components";
import { InputStyle } from "../styles/shared";
interface InputProps {
	placeholder: string;
	type: string;
	className?: string;
	name: string;
	onChange?: () => void;
}
const SInput = styled(InputStyle)`
	background-color: ${(props) => props.theme.inputBgColor};
	width: 100%;
	outline: none;
	border: 1px solid transparent;
	color: ${(props) => props.theme.fontColor};
	&:focus {
		border-color: ${(props) => props.theme.primarayColor};
	}
`;

const Input = forwardRef<any, InputProps>(({ placeholder, type, className, name, onChange }, ref) => {
	return <SInput ref={ref} className={className} placeholder={placeholder} type={type} name={name} onChange={onChange} />;
});

export default Input;
