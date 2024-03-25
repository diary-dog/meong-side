import { createGlobalStyle } from "styled-components";

import BinggraeMelona from "../assets/fonts/BinggraeMelona.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'BinggraeMelona' ;
  src: url(${BinggraeMelona}) format('truetype');
}

html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
input,
p {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
* {
    box-sizing: border-box;
  }
button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
  }

body {
  max-width: 393px;
  height: 100vh;
  line-height: 1;
  font-weight: 400;
  margin: 0 auto;
  background-color: ${(props) => props.theme.COLORS.BACKGROUND};
  color :  ${(props) => props.theme.COLORS["FONT-COLOR-A"]};
  border: 1px solid ${(props) => props.theme.COLORS["INACTIVE-BUTTON"]};

  font-family: 'BinggraeMelona', sans-serif, Arial;
}
`;

export default GlobalStyle;
