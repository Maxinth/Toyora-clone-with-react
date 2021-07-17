import { ListItem } from "./styled";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { FC } from "react";
import { DropOptions as Props } from "./data";
import { goForwardCB } from "./callbacks";
import { useDispatch } from "react-redux";

const DropOption: FC<Props> = ({ itemName, withForwardArrow }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      {itemName}
      {withForwardArrow && (
        <ArrowForwardIosIcon onClick={() => dispatch(goForwardCB(itemName))} />
      )}
    </ListItem>
  );
};

export default DropOption;
