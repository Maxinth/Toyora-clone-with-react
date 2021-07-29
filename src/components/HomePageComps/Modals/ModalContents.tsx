import { Container, Text } from "./styled";
import ModalTopControl from "./ModalTopControl";
const ModalContents = () => {
  return (
    <Container>
      <ModalTopControl />
      <Text>Enter your Zip code to find dealers, inventory and special offers near you</Text>
    </Container>
  );
};

export default ModalContents;
