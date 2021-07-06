import { LgNavInner, ListItem } from "./styled";
import { data } from "./navOnLgData";
import { Link } from "react-router-dom";
// import SearchIcon from "@material-ui/icons/Search";
// import EditIcon from "@material-ui/icons/Edit";

// const GetItemIcon = (itemName: string) => {
//   if (itemName === "Search") {
//     return <SearchIcon />;
//   } else if (itemName === "Set Location") {
//     return <EditIcon />;
//   } else {
//     return null;
//   }
// };
const LgTopItems = () => {
  return (
    <LgNavInner>
      {data.map((item) => {
        const { itemName, withIcon, iconName } = item;

        return (
          <ListItem key={itemName}>
            <Link to="/">{itemName}</Link>
            {withIcon && <span>{iconName}</span>}
          </ListItem>
        );
      })}
    </LgNavInner>
  );
};

export default LgTopItems;
