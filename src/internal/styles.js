import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    font-family: 'Stratos-Regular', sans-serif;
    cursor: pointer;
  }
  
  button,
  ._btn {
    cursor: pointer;
  }
  
  ul li {
    list-style: none;
  }
  
  @font-face {
    font-family: 'Stratos';
    src: url('../fonts/Stratos-Regular.woff2') format('woff2'),
      url('../fonts/Stratos-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Stratos-Regular', sans-serif;
    color: #fff;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`;

export const Container = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`;

export default GlobalStyle;
