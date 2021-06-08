import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
export default createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  body{
    background-color: ${(props) => props.theme.bgColor};
    
  }
`;
