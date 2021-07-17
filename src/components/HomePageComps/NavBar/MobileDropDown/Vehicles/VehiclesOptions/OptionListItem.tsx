import { ListItem } from "./styled";
import OptionsListTop from "./OptionsListTop";
import OptionsListBottom from "./OptionsListBottom";
import { VOption as Props } from "./ShowCars/data";
import { FC } from "react";

const OptionListItem: FC<Props> = (props) => {
  const { initName, imageSrc, price, ...optionsListBottomProps } = props;
  return (
    <ListItem>
      <OptionsListTop initName={initName} imageSrc={imageSrc} price={price} />
      <OptionsListBottom {...optionsListBottomProps} />
    </ListItem>
  );
};

export default OptionListItem;
