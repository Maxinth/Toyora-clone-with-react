import VehicleOptionsLayout from "../VehicleOptionsLayout";
import useVehicleState from "../useVehicleState";
import { data } from "./data";

const ShowHybrid = () => {
  const { isInView } = useVehicleState("hybrid");
  return (
    <VehicleOptionsLayout
      isInView={isInView}
      data={data}
      topTitle="hybrids & fuel cell"
    />
  );
};

export default ShowHybrid;
