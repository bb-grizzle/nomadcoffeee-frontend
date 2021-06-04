import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
export default createGlobalStyle`
  ${reset}
  body{
    background-color: ${(props) => props.theme.bgColor};
    
  }
`;
