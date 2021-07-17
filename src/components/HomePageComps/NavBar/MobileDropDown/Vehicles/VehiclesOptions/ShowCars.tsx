import NewViewHeader from "../../NewViewHeader";
import { Container } from "./styled";
import { RootState } from "../../../../../../appStore/store";
import { useSelector } from "react-redux";
import OptionsList from "./OptionsList";

const ShowCars = () => {
  const isInView = useSelector(
    (state: RootState) => state.vehicles.vehiclesInView.cars
  );
  return (
    <Container isInView={isInView}>
      <NewViewHeader title="cars & minivan" />
      <OptionsList />
    </Container>
  );
};

export default ShowCars;
