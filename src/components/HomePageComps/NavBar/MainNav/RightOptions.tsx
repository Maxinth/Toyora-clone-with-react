import { RightContainer } from "./styled";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DropMenuToggle from "./DropMenuToggle";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../../features/locationModalAndSearch";

const RightOptionsOnMobile = () => {
  const dispatch = useDispatch();
  return (
    <RightContainer>
      <LocationOnIcon onClick={() => dispatch(toggleModal())} />
      <DropMenuToggle />
    </RightContainer>
  );
};

export default RightOptionsOnMobile;
