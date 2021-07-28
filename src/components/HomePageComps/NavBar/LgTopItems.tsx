import { LgNavInner, ListItem } from "./styled";
import { data, clickCB } from "./navOnLgData";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../features/LocationModal/locationModalSlice";

const LgTopItems = () => {
  return (
    <LgNavInner>
      {data.map((item) => {
        const { itemName, withIcon, iconName } = item;

        return (
          <ListItem key={itemName}>
            <Link to="/">{itemName}</Link>
            {withIcon && iconName}
          </ListItem>
        );
      })}
    </LgNavInner>
  );
};

export default LgTopItems;
