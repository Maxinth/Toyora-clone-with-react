import { Container, Text, Box } from "./styled";
import ModalTopControl from "./ModalTopControl";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ViewPortCommonContent from "./ViewPortCommonContent";
const ModalContents = () => {
  return (
    <Container>
      <ModalTopControl />
      <Box lgShow>
        <LocationOnIcon />
        <Text lg>Set your location</Text>
      </Box>
      <ViewPortCommonContent />
      <Box lgHide>
        <Text normal>OR</Text>
        <Text>find a dealer</Text>
      </Box>
    </Container>
  );
};

export default ModalContents;
