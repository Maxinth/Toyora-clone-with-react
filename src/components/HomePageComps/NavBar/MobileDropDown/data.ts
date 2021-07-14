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
  goToHelpFulLinks: Function,
  goToAllOwners: Function,
  showCars: Function,
  showTrucks: Function,
  showCrossOver: Function,
  showHybrid: Function,
  showUpComingVehicles: Function,
  showSpecialEditions: Function
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
    case "Owners":
      callbackFunction = () => goToAllOwners();
      break;
    case "cars & minivan":
      callbackFunction = () => showCars();
      break;
    case "trucks":
      callbackFunction = () => showTrucks();
      break;
    case "crossovers & SUVs":
      callbackFunction = () => showCrossOver();
      break;
    case "hybrid & fuel cell":
      callbackFunction = () => showHybrid();
      break;
    case "upcoming vehicles":
      callbackFunction = () => showUpComingVehicles();
      break;
    case "special editions":
      callbackFunction = () => showSpecialEditions();
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
  backFromHelpFulLinks: Function,
  backFromAllOwners: Function,
  backToVehiclesView: Function
): Function => {
  // callback based on string
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
    case "Owners":
      callbackFunction = () => backFromAllOwners();
      break;
    default:
      // callbackFunction = () => "default message";
      callbackFunction = () => backToVehiclesView();
      break;
  }
  return callbackFunction();
};

export const mainDropFurtherDetails: string[] = ["FAQ", "Espanol", "Careers"];
