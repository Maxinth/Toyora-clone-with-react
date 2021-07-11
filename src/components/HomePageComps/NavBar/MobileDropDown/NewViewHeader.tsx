import { NewViewContainer } from "./styled";
import { FC } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import DropMenuToggle from "../MainNav/DropMenuToggle";
import { useDispatch } from "react-redux";
import { backFromAllVehicles } from "../../../../features/MobileDropDown/vehiclesSlice";
interface Props {
  title: string;
}
const NewViewHeader: FC<Props> = ({ title }) => {
  const dispatch = useDispatch();
  return (
    <NewViewContainer>
      <ArrowBackIosIcon onClick={() => dispatch(backFromAllVehicles())} />
      {title}
      <DropMenuToggle />
    </NewViewContainer>
  );
};

export default NewViewHeader;
