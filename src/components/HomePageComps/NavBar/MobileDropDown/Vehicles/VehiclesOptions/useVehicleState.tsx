import { RootState } from "../../../../../../appStore/store";
import { useSelector } from "react-redux";

// string literal
type ID =
  | "cars"
  | "trucks"
  | "crossOver"
  | "hybrid"
  | "upComingVehicles"
  | "specialEditions";

// id can have only one of the values specified in ID
const useVehicleState = (id: ID) => {
  //vObject returns the whole object
  const vehiclesObject = useSelector(
    (state: RootState) => state.vehicles.vehiclesInView
  );

  // the state of the id passed in can be obtained
  const isInView: boolean = vehiclesObject[id];

  return { isInView };
};

export default useVehicleState;
