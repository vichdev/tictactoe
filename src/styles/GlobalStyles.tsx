import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body{
  font: 400 14px Roboto, sans-serif;

}

input,
button,
textarea {
  font: 400 18px Roboto, sans-serif;
}

button, svg {
  cursor: pointer;
}

`;
