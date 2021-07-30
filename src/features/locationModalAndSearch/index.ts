import { createSlice } from "@reduxjs/toolkit";

export interface locationModalAndSearchState {
  showLocationModal: boolean;
  showSearchBox: boolean;
}

const initialState: locationModalAndSearchState = {
  showLocationModal: false,
  showSearchBox: false,
};

export const locationModalSlice = createSlice({
  name: "locationModalAndSearchBox",
  initialState,
  reducers: {
    // toggle the view of the modal
    toggleModal: (state) => {
      state.showLocationModal = !state.showLocationModal;
      // close searchBox if already in view when modal is clicked.
      state.showSearchBox = false;
    },

    toggleSearchBoxView: (state) => {
      state.showSearchBox = !state.showSearchBox;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleModal, toggleSearchBoxView } = locationModalSlice.actions;

export default locationModalSlice.reducer;
