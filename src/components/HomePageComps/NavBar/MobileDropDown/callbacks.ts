// callbacks imports to return to previous item
import {
  backFromAllVehicles,
  backToAllVehiclesViewFromAnySubView,
  doFullScreen,
} from "../../../../features/MobileDropDown/vehiclesSlice";
import { backFromAllShoppingTools } from "../../../../features/MobileDropDown/shoppingToolsSlice";
import { backFromHelpFulLinks } from "../../../../features/MobileDropDown/helpFulLinksSlice";
import { backFromAllOwners } from "../../../../features/MobileDropDown/ownersSlice";
import { goBackCB, getCallback as ForwardCB } from "./data";

// callbacks imports to move to next items
import {
  goToAllVehicles,
  showCars,
  showTrucks,
  showCrossOver,
  showHybrid,
  showUpComingVehicles,
  showSpecialEditions,
} from "../../../../features/MobileDropDown/vehiclesSlice";
import { showAllShoppingTools } from "../../../../features/MobileDropDown/shoppingToolsSlice";
import { goToHelpFulLinks } from "../../../../features/MobileDropDown/helpFulLinksSlice";
import { goToAllOwners } from "../../../../features/MobileDropDown/ownersSlice";

export const goBackOneStepCB = (title: string) => {
  return goBackCB(
    title,
    backFromAllVehicles,
    backFromAllShoppingTools,
    backFromHelpFulLinks,
    backFromAllOwners,
    backToAllVehiclesViewFromAnySubView
  );
};

export const goForwardCB = (itemName: string) => {
  return ForwardCB(
    itemName,
    goToAllVehicles,
    showAllShoppingTools,
    goToHelpFulLinks,
    goToAllOwners,
    showCars,
    showTrucks,
    showCrossOver,
    showHybrid,
    showUpComingVehicles,
    showSpecialEditions,
    doFullScreen
  );
};
