import { HomeContainer } from "./styled";
import Navbar from "./NavBar";
// import MockComponent from "./MockComponents";
import MobileDropDown from "./NavBar/MobileDropDown";
const HomePage = () => {
  return (
    <HomeContainer>
      <Navbar />
      <MobileDropDown />
    </HomeContainer>
  );
};

export default HomePage;
