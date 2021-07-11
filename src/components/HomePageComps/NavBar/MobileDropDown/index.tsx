import { Container } from "./styled";
import MobileNavListItems from "./MobileNavListItems";
import { useSelector } from "react-redux";
import { RootState } from "../../../../appStore/store";
import { data } from "./data";

const MobileDropDown = () => {
  const isInView = useSelector((state: RootState) => state.hamburger.isOpen);
  return (
    <Container isShown={isInView}>
      <MobileNavListItems items={data} />
    </Container>
  );
};

export default MobileDropDown;
