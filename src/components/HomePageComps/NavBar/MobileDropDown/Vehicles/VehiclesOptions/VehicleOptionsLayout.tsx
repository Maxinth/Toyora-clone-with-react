import NewViewHeader from "../../NewViewHeader";
import { Container } from "./styled";
import { RootState } from "../../../../../../appStore/store";
import { useSelector } from "react-redux";
import OptionsList from "./OptionsList";
import { FC } from "react";
import { VOption } from "./ShowCars/data";

interface Props {
  //   children: React.ReactNode;
  topTitle: string;
  data: VOption[];
}

const VehicleOptionsLayout: FC<Props> = ({ topTitle, data }) => {
  const isInView = useSelector(
    (state: RootState) => state.vehicles.vehiclesInView.cars
  );
  return (
    <Container isInView={isInView} fullScreen={isInView}>
      <NewViewHeader title={topTitle} />
      <OptionsList data={data} />
      <NewViewHeader title="Back to All Vehicles" />
    </Container>
  );
};

export default VehicleOptionsLayout;
