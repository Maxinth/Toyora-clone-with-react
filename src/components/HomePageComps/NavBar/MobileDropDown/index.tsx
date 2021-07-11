import { Container, ListContainer } from "./styled";
import DropOption from "./DropOption";
import { data } from "./data";
import { useSelector } from "react-redux";
import { RootState } from "../../../../appStore/store";

const MobileDropDown = () => {
  const isInView = useSelector((state: RootState) => state.hamburger.isOpen);
  return (
    <Container isShown={isInView}>
      <ListContainer>
        {data.map((item) => {
          return <DropOption key={item.itemName} {...item} />;
        })}
      </ListContainer>
    </Container>
  );
};

export default MobileDropDown;
