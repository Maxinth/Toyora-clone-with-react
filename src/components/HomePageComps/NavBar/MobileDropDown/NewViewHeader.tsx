import { NewViewContainer } from "./styled";
import { FC } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import DropMenuToggle from "../MainNav/DropMenuToggle";
import { useDispatch } from "react-redux";
import { goBackOneStepCB } from "./callbacks";
interface Props {
  title: string;
  isShown?: boolean;
}
const NewViewHeader: FC<Props> = ({ title, isShown = true }) => {
  const dispatch = useDispatch();

  return (
    <NewViewContainer isShown={isShown}>
      <ArrowBackIosIcon onClick={() => dispatch(goBackOneStepCB(title))} />
      {title}
      {/* hidden */}
      <DropMenuToggle />
      {/* hidden */}
    </NewViewContainer>
  );
};

export default NewViewHeader;
