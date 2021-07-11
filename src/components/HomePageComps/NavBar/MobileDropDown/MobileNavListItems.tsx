import DropOption from "./DropOption";
import { data } from "./data";
import { ListContainer } from "./styled";

const MobileNavListItems = () => {
  return (
    <ListContainer>
      {data.map((item) => {
        return <DropOption key={item.itemName} {...item} />;
      })}
    </ListContainer>
  );
};

export default MobileNavListItems;
