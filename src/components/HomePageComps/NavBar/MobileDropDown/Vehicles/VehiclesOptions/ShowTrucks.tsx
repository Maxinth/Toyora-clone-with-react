import NewViewHeader from "../../NewViewHeader";
import { Container } from "./styled";
import { RootState } from "../../../../../../appStore/store";
import { useSelector } from "react-redux";

const ShowTrucks = () => {
  const isInView = useSelector(
    (state: RootState) => state.vehicles.vehiclesInView.trucks
  );
  return (
    <Container isInView={isInView}>
      <NewViewHeader title="trucks" />
      <div>
        <h1>Trucks view</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et hic
        vitae qui minima nemo praesentium autem laudantium sed excepturi!
      </div>
    </Container>
  );
};

export default ShowTrucks;
