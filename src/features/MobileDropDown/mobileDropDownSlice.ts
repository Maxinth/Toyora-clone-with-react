import { createSlice } from "@reduxjs/toolkit";

export interface hamburgerToggleState {
  isOpen: boolean;
}

const initialState: hamburgerToggleState = {
  isOpen: false,
};

export const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState,
  reducers: {
    toggleView: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleView } = hamburgerSlice.actions;

export default hamburgerSlice.reducer;
