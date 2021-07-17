import { ListItem } from "./styled";
import OptionsListTop from "./OptionsListTop";
import OptionsListBottom from "./OptionsListBottom";

const OptionListItem = () => {
  return (
    <ListItem>
      <OptionsListTop />
      <OptionsListBottom />
    </ListItem>
  );
};

export default OptionListItem;
