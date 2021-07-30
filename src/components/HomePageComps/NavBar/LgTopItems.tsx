import { LgNavInner, ListItem } from "./styled";
import { data, clickCB } from "./navOnLgData";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  toggleModal,
  toggleSearchBoxView,
} from "../../../features/locationModalAndSearch";

const LgTopItems = () => {
  const dispatch = useDispatch();
  return (
    <LgNavInner>
      {data.map((item) => {
        const { itemName, withIcon, iconName } = item;

        return (
          <ListItem
            key={itemName}
            onClick={() =>
              dispatch(clickCB(itemName, toggleModal, toggleSearchBoxView))
            }
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
