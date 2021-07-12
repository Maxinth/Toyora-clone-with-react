import { AvContainer } from "./styled";
import NewViewHeader from "../NewViewHeader";
import MobileNavListItems from "../MobileNavListItems";
import { vehiclesList } from "./data";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../appStore/store";

const AllVehicles = () => {
  const isInView = useSelector(
    (state: RootState) => state.vehicles.showAllVehicles
  );
  return (
    <AvContainer isInView={isInView}>
      <NewViewHeader title="vehicles" />
      <MobileNavListItems items={vehiclesList} />
    </AvContainer>
  );
};

export default AllVehicles;