import { ControlBox, Text, IconContainer } from "./styled";
import { useDispatch } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import { toggleModal } from "../../../features/LocationModal/locationModalSlice";

const ModalTopControl = () => {
  const dispatch = useDispatch();
  return (
    <ControlBox>
      <Text control>Your Location</Text>
      <IconContainer onClick={() => dispatch(toggleModal())}>
        <CloseIcon />
      </IconContainer>
    </ControlBox>
  );
};

export default ModalTopControl;
