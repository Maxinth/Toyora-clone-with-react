import { HomeContainer } from "./styled";
import Navbar from "./NavBar";
// import MockComponent from "./MockComponents";
// import {useSelector} from 'react-redux'
import MobileDropDown from "./NavBar/MobileDropDown";
// import {RootState} from "../../appStore/store"
const HomePage = () => {
  // const fullView = useSelector((state:RootState) => state.vehicles.vehiclesInView)
  return (
    <HomeContainer>
      <Navbar />
      <MobileDropDown />
    </HomeContainer>
  );
};

export default HomePage;
