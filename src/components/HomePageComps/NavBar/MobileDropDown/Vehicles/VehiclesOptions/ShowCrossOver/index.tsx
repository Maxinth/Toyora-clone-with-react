import VehicleOptionsLayout from "../VehicleOptionsLayout";
import useVehicleState from "../useVehicleState";
import { data } from "./data";

const ShowCrossOver = () => {
  const { isInView } = useVehicleState("crossOver");
  return (
    <VehicleOptionsLayout
      isInView={isInView}
      data={data}
      topTitle="crossovers & suvs"
    />
  );
};

export default ShowCrossOver;
