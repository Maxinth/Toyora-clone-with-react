import { Container, Text, TextBox, Input, Submit, Box } from "./styled";
import ModalTopControl from "./ModalTopControl";
import LocationOnIcon from "@material-ui/icons/LocationOn";
const ModalContents = () => {
  return (
    <Container>
      <ModalTopControl />
      <Box>
        <LocationOnIcon />
        <Text lg>Set your location</Text>
      </Box>
      <Text normal>
        Enter your Zip code to find dealers, inventory and special offers near
        you
      </Text>
      <TextBox>
        <Input type="text" />
        <Submit>submit</Submit>
      </TextBox>
      <Box lgHide>
        <Text normal>OR</Text>
        <Text>find a dealer</Text>
      </Box>
    </Container>
  );
};

export default ModalContents;
