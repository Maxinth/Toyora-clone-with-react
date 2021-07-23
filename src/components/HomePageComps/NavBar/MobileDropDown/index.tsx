import { Container } from "./styled";
import MobileNavListItems from "./MobileNavListItems";
import { useSelector } from "react-redux";
import { RootState } from "../../../../appStore/store";
import { data, mainDropFurtherDetails } from "./data";
import GoTos from "./GoTos";
import FurtherDetails from "./FurtherDetails";
import VehiclesOptions from "./Vehicles/VehiclesOptions";

const MobileDropDown = () => {
  const isInView = useSelector((state: RootState) => state.hamburger.isOpen);
  const showV = useSelector(
    (state: RootState) => state.vehicles.showAllVehicles
  );
  // const showShop = useSelector(
  //   (state: RootState) => state.shoppingTools
  // );
  // const showHelp = useSelector(
  //   (state: RootState) => state.helpFulLinks
  // );
  // const showOwner= useSelector(
  //   (state: RootState) => state.owners
  // );

  return (
    <Container isShown={isInView} showV={showV}>
      <MobileNavListItems items={data} />
      <FurtherDetails details={mainDropFurtherDetails} />
      <GoTos />
      <VehiclesOptions />
    </Container>
  );
};

export default MobileDropDown;
