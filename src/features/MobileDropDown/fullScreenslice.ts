import { createSlice } from "@reduxjs/toolkit";

export interface screenState {
  isFullScreen: boolean;
}

const initialState: screenState = {
  isFullScreen: false,
};

export const screenSlice = createSlice({
  name: "isFullScreen",
  initialState,
  reducers: {
    //show all vehicles

    makeFullScreen: (state) => {
      state.isFullScreen = true;
    },

    revertToInitialScreen: (state) => {
      state.isFullScreen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { makeFullScreen, revertToInitialScreen } = screenSlice.actions;

export default screenSlice.reducer;
