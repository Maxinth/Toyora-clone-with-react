import { LgNavInner, ListItem } from "./styled";
import { data } from "./navOnLgData";
import { Link } from "react-router-dom";

const LgTopItems = () => {
  return (
    <LgNavInner>
      {data.map((item) => {
        const { itemName } = item;
        return (
          <ListItem key={itemName}>
            <Link to="/">{itemName}</Link>
          </ListItem>
        );
      })}
    </LgNavInner>
  );
};

export default LgTopItems;
