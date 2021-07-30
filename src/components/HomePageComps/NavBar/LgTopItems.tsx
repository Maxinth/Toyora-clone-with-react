import { LgNavInner, ListItem } from "./styled";
import { data } from "./navOnLgData";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { topLinksClickHandler } from "./callback";

const LgTopItems = () => {
  const dispatch = useDispatch();
  return (
    <LgNavInner>
      {data.map((item) => {
        const { itemName, withIcon, iconName } = item;
        return (
          <ListItem
            key={itemName}
            onClick={() => dispatch(topLinksClickHandler(itemName))}
          >
            <Link to="/">{itemName}</Link>
            {withIcon && iconName}
          </ListItem>
        );
      })}
    </LgNavInner>
  );
};

export default LgTopItems;
