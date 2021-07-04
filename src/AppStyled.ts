import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

svg{
  cursor: pointer;
}
li{
  list-style-type:none;
}
a{
  text-decoration:none;
}
`;

const AppBox = styled.div``;

export { GlobalStyle, AppBox };
