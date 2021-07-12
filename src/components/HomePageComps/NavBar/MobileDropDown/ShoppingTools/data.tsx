import SettingsIcon from "@material-ui/icons/Settings";
import CreateIcon from "@material-ui/icons/Create";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CommentIcon from "@material-ui/icons/Comment";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PaymentIcon from "@material-ui/icons/Payment";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ClosedCaptionIcon from "@material-ui/icons/ClosedCaption";
import DateRangeIcon from "@material-ui/icons/DateRange";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";

export interface ShopTools {
  itemName: string;
  iconName: JSX.Element;
}

export const data: ShopTools[] = [
  {
    itemName: "build & price",
    iconName: <SettingsIcon />,
  },
  {
    itemName: "local specials",
    iconName: <CreateIcon />,
  },
  {
    itemName: "Search Inventory",
    iconName: <DirectionsCarIcon />,
  },
  {
    itemName: "Find a Dealer",
    iconName: <LocationOnIcon />,
  },
  {
    itemName: "Request a Quote",
    iconName: <CommentIcon />,
  },
  {
    itemName: "What Fit My Budget",
    iconName: <MonetizationOnIcon />,
  },
  {
    itemName: "trade-In Value",
    iconName: <PaymentIcon />,
  },
  {
    itemName: "View Brochures",
    iconName: <ShoppingBasketIcon />,
  },
  {
    itemName: "Accessories",
    iconName: <ClosedCaptionIcon />,
  },
  {
    itemName: "Payment Estimator",
    iconName: <DateRangeIcon />,
  },
  {
    itemName: "Compare Vehicles",
    iconName: <CompareArrowsIcon />,
  },
];
