import { data } from "./data";
import VehicleOptionsLayout from "../VehicleOptionsLayout";

const ShowCars = () => {
  return <VehicleOptionsLayout topTitle="cars & minivan" data={data} />;
};

export default ShowCars;
