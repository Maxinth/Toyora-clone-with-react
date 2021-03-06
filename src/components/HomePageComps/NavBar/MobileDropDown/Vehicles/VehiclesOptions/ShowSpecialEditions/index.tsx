import VehicleOptionsLayout from "../VehicleOptionsLayout";
import useVehicleState from "../useVehicleState";
import { data } from "./data";

const ShowSpecialEditions = () => {
  const { isInView } = useVehicleState("specialEditions");
  return (
    <VehicleOptionsLayout
      isInView={isInView}
      data={data}
      topTitle="special editions"
      isBottomHeaderShown={false}
      namesOnly={true}
    />
  );
};

export default ShowSpecialEditions;
