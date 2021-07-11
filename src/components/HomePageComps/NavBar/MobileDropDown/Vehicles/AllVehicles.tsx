import { AvContainer } from "./styled";
import NewViewHeader from "../NewViewHeader";
import MobileNavListItems from "../MobileNavListItems";
import { vehiclesList } from "./data";

const AllVehicles = () => {
  return (
    <AvContainer>
      <NewViewHeader title="vehicles" />
      <MobileNavListItems items={vehiclesList} />
    </AvContainer>
  );
};

export default AllVehicles;
