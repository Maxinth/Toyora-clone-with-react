import DropOption from "./DropOption";
import { DropOptions } from "./data";
import { ListContainer } from "./styled";
import { FC } from "react";
// import { data } from "./data";

interface Props {
  itemName: string;
  withForwardArrow: boolean;
}
[];

const MobileNavListItems: FC<Props> = ({ data }) => {
  return (
    <ListContainer>
      {data.map((item: DropOptions) => {
        return <DropOption key={item.itemName} {...item} />;
      })}
    </ListContainer>
  );
};

export default MobileNavListItems;
