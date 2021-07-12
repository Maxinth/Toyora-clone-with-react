import { ShopListItem, Name } from "./styled";
import { ShopTools as Props } from "./data";
import { FC } from "react";

const ShoppingItem: FC<Props> = ({ itemName, iconName }) => {
  return (
    <ShopListItem>
      <Name> {itemName}</Name>
      {iconName}
    </ShopListItem>
  );
};

export default ShoppingItem;
