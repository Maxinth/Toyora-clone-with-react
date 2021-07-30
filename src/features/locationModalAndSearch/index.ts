import { createSlice } from "@reduxjs/toolkit";

export interface locationModalAndSearchState {
  showLocationModal: boolean;
  showSearchBox: boolean;
  otherLinks: boolean;
}

const initialState: locationModalAndSearchState = {
  showLocationModal: false,
  showSearchBox: false,
  otherLinks: false, // handles clicks to other links asides search and icon
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

    defaultClickAction: (state) => {
      state.otherLinks = !state.otherLinks;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleModal, toggleSearchBoxView, defaultClickAction } =
  locationModalSlice.actions;

export default locationModalSlice.reducer;

/* other links has been added to account for clicks on other links 
a kind of dummy state.
*/
