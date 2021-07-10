import { LgRightContainer, ListItem } from "./styled";
import DropDownToggle from "./DropDownToggle";
import { data } from "./data";

const RightOptionsOnLg = () => {
  console.log(data);
  return (
    <LgRightContainer>
      <ListItem>
        select vehicle
        <DropDownToggle />
      </ListItem>
    </LgRightContainer>
  );
};

export default RightOptionsOnLg;
