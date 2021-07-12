export interface DropOptions {
  itemName: string;
  withForwardArrow: boolean;
}

export const data: DropOptions[] = [
  {
    itemName: "Vehicles",
    withForwardArrow: true,
  },
  {
    itemName: "Shopping Tools",
    withForwardArrow: true,
  },
  {
    itemName: "Find a Dealer",
    withForwardArrow: false,
  },
  {
    itemName: "Helpful Links",
    withForwardArrow: true,
  },
  {
    itemName: "Owners",
    withForwardArrow: true,
  },
];

export const getCallback = (
  itemName: string,
  vehiclesCallback: Function
): Function => {
  let callbackFunction: Function;
  switch (itemName) {
    case "Vehicles":
      callbackFunction = () => vehiclesCallback();
      break;
    default:
      callbackFunction = () => "default message";
      break;
  }
  return callbackFunction();
};
