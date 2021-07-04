import { LgNavInner, ListItem } from "./styled";
import { data } from "./navOnLgData";
import { Link } from "react-router-dom";

const LgTopItems = () => {
  return (
    <LgNavInner>
      {data.map((item) => {
        const { itemName, withIcon, iconName } = item;

        return (
          <ListItem key={itemName}>
            <Link to="/">
              {itemName}
              {/* {withIcon && iconName} */}
            </Link>
          </ListItem>
        );
      })}
    </LgNavInner>
  );
};

export default LgTopItems;
