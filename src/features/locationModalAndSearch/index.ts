import { createSlice } from "@reduxjs/toolkit";

export interface locationModalAndSearchState {
  showLocationModal: boolean;
  showSearchBox: boolean;
  otherLinksClicked: boolean;
}

const initialState: locationModalAndSearchState = {
  showLocationModal: false,
  showSearchBox: false,
  otherLinksClicked: false, // handles clicks to other links asides search and icon - just tracks if they are clicked.
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

    otherLinksWereClicked: (state) => {
      state.otherLinksClicked = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleModal, toggleSearchBoxView, otherLinksWereClicked } =
  locationModalSlice.actions;

export default locationModalSlice.reducer;

/* 
  Other links has been added to account for clicks on other links 
  a kind of dummy state - so the functionality doesn't break as the links also need a handler to 
  take care of click actions to them.
*/
