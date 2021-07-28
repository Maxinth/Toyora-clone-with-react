import { ControlBox, Text } from "./styled";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../features/LocationModal/locationModalSlice";

const ModalTopControl = () => {
  const dispatch = useDispatch();
  return (
    <ControlBox>
      <Text>Your Location</Text>
      <HighlightOffIcon onClick={() => dispatch(toggleModal())} />
    </ControlBox>
  );
};

export default ModalTopControl;
