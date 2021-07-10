import { Container, InnerContainer } from "./styled";
import Logo from "./Logo";
import RightOptions from "./RightOptions";
import RightOptionsOnLg from "./RightOptionsOnLg";

const MainNav = () => {
  return (
    <Container>
      <InnerContainer>
        <Logo />
        <RightOptions />
        <RightOptionsOnLg />
      </InnerContainer>
    </Container>
  );
};

export default MainNav;
