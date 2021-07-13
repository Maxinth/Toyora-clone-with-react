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

// getting callback for forward click
export const getCallback = (
  itemName: string,
  vehiclesCallback: Function,
  showAllShoppingTools: Function,
  goToHelpFulLinks: Function
): Function => {
  let callbackFunction: Function;
  switch (itemName) {
    case "Vehicles":
      callbackFunction = () => vehiclesCallback();
      console.log("off to vehicles view");
      break;
    case "Shopping Tools":
      callbackFunction = () => showAllShoppingTools();
      break;
    case "Helpful Links":
      callbackFunction = () => goToHelpFulLinks();
      break;
    default:
      callbackFunction = () => "default message";
      break;
  }
  return callbackFunction();
};

// getting callback for backward click
export const goBackCB = (
  title: string,
  vehiclesCallback: Function,
  shoppingCB: Function,
  backFromHelpFulLinks: Function
): Function => {
  let callbackFunction: Function;
  switch (title) {
    case "Vehicles":
      callbackFunction = () => vehiclesCallback();

      break;
    case "Shopping Tools":
      callbackFunction = () => shoppingCB();

      break;
    case "Helpful Links":
      callbackFunction = () => backFromHelpFulLinks();

      break;
    default:
      callbackFunction = () => "default message";
      break;
  }
  return callbackFunction();
};
