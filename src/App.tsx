import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { lightTheme } from "./theme";

import Main from "./Main";
import GlobalModal from "./GlobalModal";

import PretendardWoff2 from "./assets/fonts/Pretendard-Regular.woff2";
import PretendardWoff from "./assets/fonts/Pretendard-Regular.woff";

const GlobalStyle = createGlobalStyle`
${reset};

@font-face {
  font-family: "pretendard";
  src: url(${PretendardWoff2}) format("woff2"),
  url(${PretendardWoff}) format("woff");
}

*{
  box-sizing: border-box;
}


body{
  font-family: "pretendard";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  line-height: 1.3;
}
`;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Main />
      <GlobalModal />
    </ThemeProvider>
  );
}

export default App;
