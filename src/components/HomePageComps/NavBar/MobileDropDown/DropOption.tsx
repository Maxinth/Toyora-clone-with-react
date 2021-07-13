import { ListItem } from "./styled";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { FC } from "react";
import { DropOptions as Props, getCallback } from "./data";
import { goToAllVehicles } from "../../../../features/MobileDropDown/vehiclesSlice";
import { showAllShoppingTools } from "../../../../features/MobileDropDown/shoppingToolsSlice";
import { goToHelpFulLinks } from "../../../../features/MobileDropDown/helpFulLinksSlice";
import { goToAllOwners } from "../../../../features/MobileDropDown/ownersSlice";
import { useDispatch } from "react-redux";

const DropOption: FC<Props> = ({ itemName, withForwardArrow }) => {
  const dispatch = useDispatch();

  const goForwardCB = () => {
    return getCallback(
      itemName,
      goToAllVehicles,
      showAllShoppingTools,
      goToHelpFulLinks,
      goToAllOwners
    );
  };

  return (
    <ListItem>
      {itemName}
      {withForwardArrow && (
        <ArrowForwardIosIcon onClick={() => dispatch(goForwardCB())} />
      )}
    </ListItem>
  );
};

export default DropOption;
