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
  },
});

// Action creators are generated for each case reducer function
export const { goToAllVehicles, backFromAllVehicles } = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
