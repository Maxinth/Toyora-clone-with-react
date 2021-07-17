import NewViewHeader from "../NewViewHeader";
import MobileNavListItems from "../MobileNavListItems";
import { vehiclesList } from "./data";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../appStore/store";
import OptionsLayout from "../OptionsLayout";

const AllVehicles = () => {
  const isInView = useSelector(
    (state: RootState) => state.vehicles.showAllVehicles
  );
  return (
    <OptionsLayout isInView={isInView}>
      <NewViewHeader title="Vehicles" />
      <MobileNavListItems items={vehiclesList} />
    </OptionsLayout>
  );
};

export default AllVehicles;
