import VehicleOptionsLayout from "../VehicleOptionsLayout";
import useVehicleState from "../useVehicleState";
import { data } from "./data";

const ShowTrucks = () => {
  const { isInView } = useVehicleState("trucks");
  return (
    <VehicleOptionsLayout isInView={isInView} data={data} topTitle="trucks" />
  );
};

export default ShowTrucks;
