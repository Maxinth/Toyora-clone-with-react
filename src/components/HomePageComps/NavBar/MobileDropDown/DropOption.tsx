import { ListItem } from "./styled";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { FC } from "react";
import { DropOptions as Props, getCallback } from "./data";
import { goToAllVehicles } from "../../../../features/MobileDropDown/vehiclesSlice";
import { showAllShoppingTools } from "../../../../features/MobileDropDown/shoppingToolsSlice";
import { useDispatch } from "react-redux";

const DropOption: FC<Props> = ({ itemName, withForwardArrow }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      {itemName}
      {withForwardArrow && (
        <ArrowForwardIosIcon
          onClick={() =>
            dispatch(
              getCallback(itemName, goToAllVehicles, showAllShoppingTools)
            )
          }
        />
      )}
    </ListItem>
  );
};

export default DropOption;
