import Home from "./components/HomePageComps";
import { GlobalStyle, AppBox } from "./AppStyled";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppBox className="App">
        <Home />
      </AppBox>
    </>
  );
}

export default App;
