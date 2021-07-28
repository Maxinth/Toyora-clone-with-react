import { HomeContainer } from "./styled";
import Navbar from "./NavBar";
import MobileDropDown from "./NavBar/MobileDropDown";
import LocationModal from "./Modals/LocationModal";

const HomePage = () => {
  return (
    <HomeContainer>
      <LocationModal />
      <Navbar />
      <MobileDropDown />
    </HomeContainer>
  );
};

export default HomePage;
