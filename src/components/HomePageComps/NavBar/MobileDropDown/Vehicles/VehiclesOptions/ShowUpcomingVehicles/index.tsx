import VehicleOptionsLayout from "../VehicleOptionsLayout";
import useVehicleState from "../useVehicleState";
import { data } from "./data";

const ShowUpcomingvehicles = () => {
  const { isInView } = useVehicleState("upComingVehicles");
  return (
    <VehicleOptionsLayout isInView={isInView} data={data} topTitle="trucks" />
  );
};

export default ShowUpcomingvehicles;
