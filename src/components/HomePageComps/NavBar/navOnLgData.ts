// import SearchIcon from "@material-ui/icons/Search";
// import EditIcon from "@material-ui/icons/Edit";

import React from "react";
interface LgTopItems {
  itemName: string;
  withIcon?: boolean;
  iconName?: React.ReactElement;
}

export const data: LgTopItems[] = [
  {
    itemName: "Search",
    withIcon: true,
    // iconName: SearchIcon
  },
  {
    itemName: "FAQ",
  },
  {
    itemName: "Certified Used Vehicles",
  },
  {
    itemName: "Owners",
  },
  {
    itemName: "Espanol",
  },
  {
    itemName: "Set Location",
    withIcon: true,
  },
];
