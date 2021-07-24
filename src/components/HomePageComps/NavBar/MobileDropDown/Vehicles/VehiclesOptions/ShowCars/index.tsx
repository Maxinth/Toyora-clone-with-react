import NewViewHeader from "../../../NewViewHeader";
import { Container } from "../styled";
import { RootState } from "../../../../../../../appStore/store";
import { useSelector } from "react-redux";
import OptionsList from "../OptionsList";
import { data } from "./data";

const ShowCars = () => {
  const isInView = useSelector(
    (state: RootState) => state.vehicles.vehiclesInView.cars
  );
  return (
    <Container isInView={isInView} fullScreen={isInView}>
      <NewViewHeader title="cars & minivan" />
      <OptionsList data={data} />
      <NewViewHeader title="Back to All Vehicles" />
    </Container>
  );
};

export default ShowCars;
