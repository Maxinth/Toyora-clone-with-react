import NewViewHeader from "../../NewViewHeader";
import { Container } from "./styled";
import OptionsList from "./OptionsList";
import { FC } from "react";
import { VOption } from "./ShowCars/data";

interface Props {
  topTitle: string;
  data: VOption[];
  isInView: boolean;
}

const VehicleOptionsLayout: FC<Props> = ({ topTitle, data, isInView }) => {
  return (
    <Container isInView={isInView} fullScreen={isInView}>
      <NewViewHeader title={topTitle} />
      <OptionsList data={data} />
      <NewViewHeader title="Back to All Vehicles" />
    </Container>
  );
};

export default VehicleOptionsLayout;
