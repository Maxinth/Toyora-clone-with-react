import NewViewHeader from "../../NewViewHeader";
import { Container } from "./styled";
import OptionsList from "./OptionsList";
import { FC } from "react";
import { VOption } from "./ShowCars/data";

interface Props {
  topTitle: string;
  data: VOption[];
  isInView: boolean;
  isBottomHeaderShown?: boolean;
  namesOnly?: boolean;
}

const VehicleOptionsLayout: FC<Props> = ({
  topTitle,
  data,
  isInView,
  isBottomHeaderShown = true,
  namesOnly = false,
}) => {
  return (
    <Container isInView={isInView} fullScreen={isInView}>
      <NewViewHeader title={topTitle} />
      <OptionsList data={data} namesOnly={namesOnly} />
      <NewViewHeader
        title="Back to All Vehicles"
        isShown={isBottomHeaderShown}
      />
    </Container>
  );
};

export default VehicleOptionsLayout;
