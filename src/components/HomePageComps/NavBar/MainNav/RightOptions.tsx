import { RightContainer } from "./styled";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

const RightOptions = () => {
  return (
    <RightContainer>
      <LocationOnIcon />
      <IconButton>
        <MenuIcon />
      </IconButton>
    </RightContainer>
  );
};

export default RightOptions;
