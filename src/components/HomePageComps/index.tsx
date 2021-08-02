import { HomeContainer } from "./styled";
import Navbar from "./NavBar";
import MobileDropDown from "./NavBar/MobileDropDown";
// import LocationModal from "./Modals/LocationModal";
import SearchBar from "./SearchBar";
import BannerSlider from "./BannerSlider";

const HomePage = () => {
  return (
    <HomeContainer>
      {/* <LocationModal /> */}
      <SearchBar />
      <Navbar />
      <MobileDropDown />
      <BannerSlider />
    </HomeContainer>
  );
};

export default HomePage;
