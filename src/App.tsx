import Home from "./components/HomePageComps";
import { GlobalStyle, AppBox } from "./AppStyled";
import LocationModal from "./components/HomePageComps/Modals/LocationModal";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppBox className="App">
        <LocationModal />
        <Home />
      </AppBox>
    </>
  );
}

export default App;
