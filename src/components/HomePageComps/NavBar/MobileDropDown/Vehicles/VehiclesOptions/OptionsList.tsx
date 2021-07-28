import OptionListItem from "./OptionListItem";
import { ItemContainer } from "./styled";
import { VOption } from "./ShowCars/data";
import { FC } from "react";

interface Props {
  data: VOption[];
  namesOnly: boolean;
}

const OptionsList: FC<Props> = ({ data, namesOnly }) => {
  return (
    <ItemContainer namesOnly={namesOnly}>
      {data.map((item: VOption) => (
        <OptionListItem key={item.mainName} {...item} />
      ))}
    </ItemContainer>
  );
};

export default OptionsList;
