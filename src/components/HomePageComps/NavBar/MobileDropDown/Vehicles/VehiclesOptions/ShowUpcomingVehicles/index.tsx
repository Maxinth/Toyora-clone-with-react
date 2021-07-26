import VehicleOptionsLayout from "../VehicleOptionsLayout";
import useVehicleState from "../useVehicleState";
import { data } from "./data";

const ShowUpComingVehicles = () => {
  const { isInView } = useVehicleState("upComingVehicles");
  return (
    <VehicleOptionsLayout
      isInView={isInView}
      data={data}
      topTitle="upcoming vehicles"
    />
  );
};

export default ShowUpComingVehicles;
