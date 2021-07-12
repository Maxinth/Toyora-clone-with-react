import { Container } from "./styled";
import MobileNavListItems from "./MobileNavListItems";
import { useSelector } from "react-redux";
import { RootState } from "../../../../appStore/store";
import { data } from "./data";
import AllVehicles from "./Vehicles/AllVehicles";
import ShoppingTools from "./ShoppingTools";

const MobileDropDown = () => {
  const isInView = useSelector((state: RootState) => state.hamburger.isOpen);
  return (
    <Container isShown={isInView}>
      <MobileNavListItems items={data} />
      <AllVehicles />
      <ShoppingTools />
    </Container>
  );
};

export default MobileDropDown;