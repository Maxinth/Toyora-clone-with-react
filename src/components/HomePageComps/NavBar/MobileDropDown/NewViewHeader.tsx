import { NewViewContainer } from "./styled";
import { FC } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import DropMenuToggle from "../MainNav/DropMenuToggle";
import { useDispatch } from "react-redux";
import { backFromAllVehicles } from "../../../../features/MobileDropDown/vehiclesSlice";
import { backFromAllShoppingTools } from "../../../../features/MobileDropDown/shoppingToolsSlice";
import { backFromHelpFulLinks } from "../../../../features/MobileDropDown/helpFulLinksSlice";
import { backFromAllOwners } from "../../../../features/MobileDropDown/ownersSlice";
import { goBackCB } from "./data";
interface Props {
  title: string;
}
const NewViewHeader: FC<Props> = ({ title }) => {
  const dispatch = useDispatch();
  const goBackOneStepCB = () => {
    return goBackCB(
      title,
      backFromAllVehicles,
      backFromAllShoppingTools,
      backFromHelpFulLinks,
      backFromAllOwners
    );
  };

  return (
    <NewViewContainer>
      <ArrowBackIosIcon onClick={() => dispatch(goBackOneStepCB())} />
      {title}
      <DropMenuToggle />
    </NewViewContainer>
  );
};

export default NewViewHeader;
