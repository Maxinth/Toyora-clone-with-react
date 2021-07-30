import { clickCB } from "./navOnLgData";
import {
  toggleModal,
  toggleSearchBoxView,
  otherLinksWereClicked,
} from "../../../features/locationModalAndSearch";

export const topLinksClickHandler = (itemName: string) => {
  return clickCB(
    itemName,
    toggleModal,
    toggleSearchBoxView,
    otherLinksWereClicked
  );
};

/*
topLinksClickHandler which returns clickCB is necessitated so as not 
to bloat the LgTopItems components' dispatch function with all of the arguments 
passed here. topLinksClickHandler is basically a callback that returns another callback


*/
