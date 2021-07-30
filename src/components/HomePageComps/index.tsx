import { HomeContainer } from "./styled";
import Navbar from "./NavBar";
import MobileDropDown from "./NavBar/MobileDropDown";
import LocationModal from "./Modals/LocationModal";
import SearchBar from "./SearchBar";

const HomePage = () => {
  return (
    <HomeContainer>
      <LocationModal />
      <SearchBar />
      <Navbar />
      <MobileDropDown />
    </HomeContainer>
  );
};

export default HomePage;
