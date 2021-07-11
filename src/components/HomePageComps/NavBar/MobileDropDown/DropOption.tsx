import { ListItem } from "./styled";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { FC } from "react";
import { DropOptions as Props } from "./data";
import { goToAllVehicles } from "../../../../features/MobileDropDown/vehiclesSlice";
import { useDispatch } from "react-redux";

const DropOption: FC<Props> = ({ itemName, withForwardArrow }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      {itemName}
      {withForwardArrow && (
        <ArrowForwardIosIcon onClick={() => dispatch(goToAllVehicles())} />
      )}
    </ListItem>
  );
};

export default DropOption;
