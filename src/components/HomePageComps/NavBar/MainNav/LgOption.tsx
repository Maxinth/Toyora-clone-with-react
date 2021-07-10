import DropDownToggle from "./DropDownToggle";
import { ListItem } from "./styled";
import { FC, useState } from "react";
import { Items as Props } from "./data";

const LgOption: FC<Props> = ({ optionName, withDropDown }) => {
  const [isIconFlipped, setIsIconFlipped] = useState(false);
  const doFlip = () => setIsIconFlipped(!isIconFlipped);

  return (
    <ListItem onClick={() => doFlip()}>
      {optionName}
      {withDropDown && <DropDownToggle flipState={isIconFlipped} />}
    </ListItem>
  );
};

export default LgOption;
