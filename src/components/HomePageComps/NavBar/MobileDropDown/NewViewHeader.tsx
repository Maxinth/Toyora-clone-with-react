import { NewViewContainer } from "./styled";
import { FC } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import DropMenuToggle from "../MainNav/DropMenuToggle";
import { useDispatch } from "react-redux";
import { goBackOneStepCB } from "./callbacks";
interface Props {
  title: string;
}
const NewViewHeader: FC<Props> = ({ title }) => {
  const dispatch = useDispatch();

  return (
    <NewViewContainer>
      <ArrowBackIosIcon onClick={() => dispatch(goBackOneStepCB(title))} />
      {title}
      {/* hidden */}
      <DropMenuToggle />
      {/* hidden */}
    </NewViewContainer>
  );
};

export default NewViewHeader;
