import DropDownToggle from "./DropDownToggle";
import { ListItem } from "./styled";
import { FC } from "react";
import { Items as Props } from "./data";

const LgOption: FC<Props> = ({ optionName, withDropDown }) => {
  return (
    <ListItem>
      {optionName}
      {withDropDown && <DropDownToggle />}
    </ListItem>
  );
};

export default LgOption;
