import { Container, Text, TextBox, Input, Submit } from "./styled";
import ModalTopControl from "./ModalTopControl";
const ModalContents = () => {
  return (
    <Container>
      <ModalTopControl />
      <Text normal>
        Enter your Zip code to find dealers, inventory and special offers near
        you
      </Text>
      <TextBox>
        <Input type="text" />
        <Submit>submit</Submit>
      </TextBox>
    </Container>
  );
};

export default ModalContents;
