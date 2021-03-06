import { Container } from "./styled";
import MobileNavListItems from "./MobileNavListItems";
import { useSelector } from "react-redux";
import { RootState } from "../../../../appStore/store";
import { data, mainDropFurtherDetails } from "./data";
import useFullScreen from "./useFullScreen";
import GoTos from "./GoTos";
import FurtherDetails from "./FurtherDetails";
import VehiclesOptions from "./Vehicles/VehiclesOptions";

const MobileDropDown = () => {
  const isInView = useSelector((state: RootState) => state.hamburger.isOpen);
  const { isFullScreen } = useFullScreen();

  return (
    <Container isShown={isInView} showV={isFullScreen}>
      <MobileNavListItems items={data} />
      <FurtherDetails details={mainDropFurtherDetails} />
      <GoTos />
      <VehiclesOptions />
    </Container>
  );
};

export default MobileDropDown;
