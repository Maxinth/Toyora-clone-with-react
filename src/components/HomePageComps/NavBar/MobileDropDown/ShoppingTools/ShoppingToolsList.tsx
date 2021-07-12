import { ListContainer } from "../styled";
import { data } from "./data";
import ShoppingItem from "./ShoppingItem";

const ShoppingToolsList = () => {
  return (
    <ListContainer>
      {data.map((item) => {
        return <ShoppingItem key={item.itemName} {...item} />;
      })}
    </ListContainer>
  );
};

export default ShoppingToolsList;
