import { Container } from "./styled";
import MobileNavListItems from "./MobileNavListItems";
import { useSelector } from "react-redux";
import { RootState } from "../../../../appStore/store";
import { data, mainDropFurtherDetails } from "./data";
import GoTos from "./GoTos";
import FurtherDetails from "./FurtherDetails";

const MobileDropDown = () => {
  const isInView = useSelector((state: RootState) => state.hamburger.isOpen);
  return (
    <Container isShown={isInView}>
      <MobileNavListItems items={data} />
      <FurtherDetails details={mainDropFurtherDetails} />
      <GoTos />
    </Container>
  );
};

export default MobileDropDown;
