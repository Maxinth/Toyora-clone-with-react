import { Container, ListContainer, ListItem } from "./styled";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const MobileDropDown = () => {
  return (
    <Container>
      <ListContainer>
        <ListItem>
          Vehicles <ArrowForwardIosIcon />
        </ListItem>
      </ListContainer>
    </Container>
  );
};

export default MobileDropDown;
