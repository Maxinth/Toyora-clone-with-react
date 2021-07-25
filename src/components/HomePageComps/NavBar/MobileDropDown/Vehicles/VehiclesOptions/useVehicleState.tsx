import { RootState } from "../../../../../../appStore/store";
import { useSelector } from "react-redux";

type ID =
  | "cars"
  | "trucks"
  | "crossOver"
  | "hybrid"
  | "upComingVehicles"
  | "specialEditions";

const useVehicleState = (id: ID) => {
  const vObject = useSelector(
    (state: RootState) => state.vehicles.vehiclesInView
  );
  const isInView = vObject[`${id}`];

  return { isInView };
};

export default useVehicleState;
