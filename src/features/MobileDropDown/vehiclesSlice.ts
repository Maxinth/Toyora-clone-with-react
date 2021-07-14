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
    },

    showTrucks: (state) => {
      state.vehiclesInView.trucks = true;
    },

    showCrossOver: (state) => {
      state.vehiclesInView.crossOver = true;
    },
    showHybrid: (state) => {
      state.vehiclesInView.hybrid = true;
    },

    showUpComingVehicles: (state) => {
      state.vehiclesInView.upComingVehicles = true;
    },

    showSpecialEditions: (state) => {
      state.vehiclesInView.specialEditions = true;
    },

    backToAllVehiclesViewFromAnySubView: (state) => {
      state.vehiclesInView.cars = false;
      state.vehiclesInView.trucks = false;
      state.vehiclesInView.crossOver = false;
      state.vehiclesInView.hybrid = false;
      state.vehiclesInView.upComingVehicles = false;
      state.vehiclesInView.specialEditions = false;
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
} = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
