import { Container } from "./styled";
import ModalTopControl from "./ModalTopControl";
import ViewPortCommonContent from "./ViewPortCommonContent";
import LgTopText from "./LgTopText";
import SmVeiwPortBottomText from "./SmVeiwPortBottomText";

const ModalContents = () => {
  return (
    <Container>
      <ModalTopControl />
      <LgTopText />
      <ViewPortCommonContent />
      <SmVeiwPortBottomText />
    </Container>
  );
};

export default ModalContents;
