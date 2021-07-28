import { createSlice } from "@reduxjs/toolkit";

export interface locationModalState {
  showLocationModal: boolean;
}

const initialState: locationModalState = {
  showLocationModal: false,
};

export const locationModalSlice = createSlice({
  name: "locationModal",
  initialState,
  reducers: {
    //show all shoppingTools
    showLocationModal: (state) => {
      state.showLocationModal = true;
    },
    // return to initial view from all shoppingTools view
    closeLocationModal: (state) => {
      state.showLocationModal = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showLocationModal, closeLocationModal } =
  locationModalSlice.actions;

export default locationModalSlice.reducer;
