import { createSlice } from "@reduxjs/toolkit";

export interface vehiclesState {
  showAllVehicles: boolean;
  vehiclesInView: {
    cars: boolean;
    trucks: boolean;
    crossOver: boolean;
    hybrid: boolean;
    upComingVehicles: boolean;
    specialEditions: boolean;
  };
  isFullScreen: boolean;
}

const initialState: vehiclesState = {
  showAllVehicles: false,
  vehiclesInView: {
    cars: false,
    trucks: false,
    crossOver: false,
    hybrid: false,
    upComingVehicles: false,
    specialEditions: false,
  },
  isFullScreen: false,
};

export const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    //show all vehicles
    goToAllVehicles: (state) => {
      state.showAllVehicles = true;
    },
    // return to initial view from all vehicle's view
    backFromAllVehicles: (state) => {
      state.showAllVehicles = false;
    },

    // show Options from vehicles - when goToAllVehicles runs

    showCars: (state) => {
      state.vehiclesInView.cars = true;
      state.isFullScreen = true;
    },

    showTrucks: (state) => {
      state.vehiclesInView.trucks = true;
      state.isFullScreen = true;
    },

    showCrossOver: (state) => {
      state.vehiclesInView.crossOver = true;
      state.isFullScreen = true;
    },
    showHybrid: (state) => {
      state.vehiclesInView.hybrid = true;
      state.isFullScreen = true;
    },

    showUpComingVehicles: (state) => {
      state.vehiclesInView.upComingVehicles = true;
      state.isFullScreen = true;
    },

    showSpecialEditions: (state) => {
      state.vehiclesInView.specialEditions = true;
      state.isFullScreen = true;
    },

    backToAllVehiclesViewFromAnySubView: (state) => {
      state.vehiclesInView.cars = false;
      state.vehiclesInView.trucks = false;
      state.vehiclesInView.crossOver = false;
      state.vehiclesInView.hybrid = false;
      state.vehiclesInView.upComingVehicles = false;
      state.vehiclesInView.specialEditions = false;
      state.isFullScreen = false;
    },
    doFullScreen: (state) => {
      state.isFullScreen = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  goToAllVehicles,
  backFromAllVehicles,
  showCars,
  showTrucks,
  showCrossOver,
  showHybrid,
  showUpComingVehicles,
  showSpecialEditions,
  backToAllVehiclesViewFromAnySubView,
  doFullScreen,
} = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
