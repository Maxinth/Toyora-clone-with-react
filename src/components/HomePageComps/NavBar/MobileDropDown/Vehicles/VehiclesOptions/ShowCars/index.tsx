import { data } from "./data";
import VehicleOptionsLayout from "../VehicleOptionsLayout";
import useVehicleState from "../useVehicleState";
const ShowCars = () => {
  const { isInView } = useVehicleState("cars");
  return (
    <VehicleOptionsLayout
      topTitle="cars & minivan"
      data={data}
      isInView={isInView}
    />
  );
};

export default ShowCars;
