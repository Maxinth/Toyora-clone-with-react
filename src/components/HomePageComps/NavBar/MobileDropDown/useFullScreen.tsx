import { doFullScreen } from "./data";
import { useSelector } from "react-redux";
import { RootState } from "../../../../appStore/store";

const useFullScreen = () => {
  const showVehicles = useSelector(
    (state: RootState) => state.vehicles.showAllVehicles
  );
  const showShops = useSelector(
    (state: RootState) => state.shoppingTools.showShoppingTools
  );
  const showHelp = useSelector(
    (state: RootState) => state.helpFulLinks.showHelpFulLinks
  );
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
