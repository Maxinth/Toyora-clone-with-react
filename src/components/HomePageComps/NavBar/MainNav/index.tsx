import { Container, InnerContainer } from "./styled";
import Logo from "./Logo";
import RightOptions from "./RightOptions";
const MainNav = () => {
  return (
    <Container>
      <InnerContainer>
        <Logo />
        <RightOptions />
      </InnerContainer>
    </Container>
  );
};

export default MainNav;
