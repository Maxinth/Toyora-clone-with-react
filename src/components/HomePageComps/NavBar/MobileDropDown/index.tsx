import { Container, ListContainer } from "./styled";
import DropOption from "./DropOption";
import { data } from "./data";

const MobileDropDown = () => {
  return (
    <Container>
      <ListContainer>
        {data.map((item) => {
          return <DropOption key={item.itemName} {...item} />;
        })}
      </ListContainer>
    </Container>
  );
};

export default MobileDropDown;
