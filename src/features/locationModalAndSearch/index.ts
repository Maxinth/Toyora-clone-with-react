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
    // toggle the view of the modal
    toggleModal: (state) => {
      state.showLocationModal = !state.showLocationModal;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleModal } = locationModalSlice.actions;

export default locationModalSlice.reducer;
