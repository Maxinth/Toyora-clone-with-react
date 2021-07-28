import { ControlBox, Text } from "./styled";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const ModalTopControl = () => {
  return (
    <ControlBox>
      <Text>Your Location</Text>
      <HighlightOffIcon />
    </ControlBox>
  );
};

export default ModalTopControl;
