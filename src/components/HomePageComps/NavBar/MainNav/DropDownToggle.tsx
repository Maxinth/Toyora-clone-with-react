import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Span } from "./styled";
import { FC } from "react";

export interface Props {
  flipState: boolean;
}

const DropDownToggle: FC<Props> = ({ flipState }) => {
  return (
    <Span flipState={flipState}>
      <ExpandMoreIcon />
    </Span>
  );
};

export default DropDownToggle;
