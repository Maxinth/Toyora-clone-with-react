import { ListItem } from "./styled";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { FC } from "react";
import { DropOptions as Props } from "./data";

const DropOption: FC<Props> = ({ itemName, withForwardArrow }) => {
  return (
    <ListItem>
      {itemName}
      {withForwardArrow && <ArrowForwardIosIcon />}
    </ListItem>
  );
};

export default DropOption;
