import { doFullScreen } from "./data";
import { useSelector } from "react-redux";
import { RootState } from "../../../../appStore/store";

const useFullScreen = () => {
  // get the vehicles state
  const showVehicles = useSelector(
    (state: RootState) => state.vehicles.showAllVehicles
  );

  // get shops state
  const showShops = useSelector(
    (state: RootState) => state.shoppingTools.showShoppingTools
  );
  // get help State
  const showHelp = useSelector(
    (state: RootState) => state.helpFulLinks.showHelpFulLinks
  );

  // get owners state
  const showOwners = useSelector((state: RootState) => state.owners.showOwners);

  const isFullScreen: boolean = doFullScreen(
    showVehicles,
    showShops,
    showHelp,
    showOwners
  );

  return { isFullScreen };
};

export default useFullScreen;
