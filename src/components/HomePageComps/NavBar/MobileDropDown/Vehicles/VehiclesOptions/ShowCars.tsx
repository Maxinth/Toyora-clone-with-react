import NewViewHeader from "../../NewViewHeader";
import { Container } from "./styled";
import { RootState } from "../../../../../../appStore/store";
import { useSelector } from "react-redux";

const ShowCars = () => {
  const isInView = useSelector(
    (state: RootState) => state.vehicles.vehiclesInView.cars
  );
  return (
    <Container isInView={isInView}>
      <NewViewHeader title="cars & minivan" />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et hic
        vitae qui minima nemo praesentium autem laudantium sed excepturi!
      </div>
    </Container>
  );
};

export default ShowCars;
