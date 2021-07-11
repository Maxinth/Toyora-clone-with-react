import DropOption from "./DropOption";
import { DropOptions } from "./data";
import { ListContainer } from "./styled";
import { FC } from "react";

interface Props {
  items: DropOptions[];
}

const MobileNavListItems: FC<Props> = ({ items }) => {
  return (
    <ListContainer>
      {items.map((item: DropOptions) => {
        return <DropOption key={item.itemName} {...item} />;
      })}
    </ListContainer>
  );
};

export default MobileNavListItems;
