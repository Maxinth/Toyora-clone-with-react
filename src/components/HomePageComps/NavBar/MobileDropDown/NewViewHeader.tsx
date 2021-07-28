import { NewViewContainer } from "./styled";
import { FC } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import DropMenuToggle from "../MainNav/DropMenuToggle";
import { useDispatch } from "react-redux";
import { goBackOneStepCB } from "./callbacks";
interface Props {
  title: string;
  isShown?: boolean;
  noToggle?: boolean;
}
const NewViewHeader: FC<Props> = ({
  title,
  isShown = true,
  noToggle = false,
}) => {
  const dispatch = useDispatch();

  return (
    <NewViewContainer isShown={isShown} doTwoItems={noToggle}>
      <ArrowBackIosIcon onClick={() => dispatch(goBackOneStepCB(title))} />
      {title}

      {!noToggle && <DropMenuToggle showCloseOnly={true} />}
    </NewViewContainer>
  );
};

export default NewViewHeader;
