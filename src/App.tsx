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

/*
fix overflow issue on mobile dropdown and move assets to public/items for easy iteration
*/
