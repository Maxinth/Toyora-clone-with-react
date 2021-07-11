import { RightContainer } from "./styled";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DropMenuToggle from "./DropMenuToggle";

const RightOptions = () => {
  return (
    <RightContainer>
      <LocationOnIcon />
      <DropMenuToggle />
    </RightContainer>
  );
};

export default RightOptions;
