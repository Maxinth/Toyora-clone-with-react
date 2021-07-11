import { NewViewContainer } from "./styled";
import { FC } from "react";
import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

interface Props {
  title: string;
}
const NewViewHeader: FC<Props> = ({ title }) => {
  return (
    <NewViewContainer>
      <ArrowBackIosIcon />
      {title}
      <CloseIcon />
    </NewViewContainer>
  );
};

export default NewViewHeader;
