import SearchIcon from "@material-ui/icons/Search";
import EditIcon from "@material-ui/icons/Edit";

// import { ComponentType } from "react";
interface LgTopItems {
  itemName: string;
  withIcon: boolean;
  iconName?: React.ReactNode;
}

export const data: LgTopItems[] = [
  {
    itemName: "Search",
    withIcon: true,
    iconName: SearchIcon,
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
    iconName: EditIcon,
  },
];
