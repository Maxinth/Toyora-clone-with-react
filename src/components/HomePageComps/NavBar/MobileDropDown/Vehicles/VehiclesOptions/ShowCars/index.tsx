// import NewViewHeader from "../../../NewViewHeader";
// import { Container } from "../styled";
import { RootState } from "../../../../../../../appStore/store";
import { useSelector } from "react-redux";
// import OptionsList from "../OptionsList";
import { data } from "./data";
import VehicleOptionsLayout from "../VehicleOptionsLayout";

const ShowCars = () => {
  const isInView = useSelector(
    (state: RootState) => state.vehicles.vehiclesInView.cars
  );
  return (
    <VehicleOptionsLayout
      topTitle="cars & minivan"
      data={data}
      isInView={isInView}
    />
  );
};

export default ShowCars;
