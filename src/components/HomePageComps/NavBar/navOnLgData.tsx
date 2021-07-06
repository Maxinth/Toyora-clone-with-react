import SearchIcon from "@material-ui/icons/Search";
import EditIcon from "@material-ui/icons/Edit";

// SEE COMMENTS
interface LgTopItems {
  itemName: string;
  withIcon: boolean;
  iconName?: JSX.Element;
}

export const data: LgTopItems[] = [
  {
    itemName: "Search",
    withIcon: true,
    iconName: <SearchIcon />,
  },
  {
    itemName: "FAQ",
    withIcon: false,
  },
  {
    itemName: "Certified Used Vehicles",
    withIcon: false,
  },
  {
    itemName: "Owners",
    withIcon: false,
  },
  {
    itemName: "Espanol",
    withIcon: false,
  },
  {
    itemName: "Set Location",
    withIcon: true,
    iconName: <EditIcon />,
  },
];

/*
In a bid to resolve the material ui icon type issh,  I have converted this file from being a ts file to a tsx file so Ican
use the Icon components in the array.

*/
