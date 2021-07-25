import { RootState } from "../../../../../../../appStore/store";
import { useSelector } from "react-redux";
import VehicleOptionsLayout from "../VehicleOptionsLayout";
import { data } from "./data";

const ShowTrucks = () => {
  const isInView = useSelector(
    (state: RootState) => state.vehicles.vehiclesInView.trucks
  );
  return (
    <VehicleOptionsLayout isInView={isInView} data={data} topTitle="trucks" />
  );
};

export default ShowTrucks;
