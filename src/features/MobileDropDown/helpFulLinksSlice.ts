import { createSlice } from "@reduxjs/toolkit";

export interface helpFulLinksState {
  showHelpFulLinks: boolean;
}

const initialState: helpFulLinksState = {
  showHelpFulLinks: false,
};

export const helpFulLinksSlice = createSlice({
  name: "helpful Links",
  initialState,
  reducers: {
    //show helpful Links
    goToHelpFulLinks: (state) => {
      state.showHelpFulLinks = true;
    },
    // return to initial view from all helpfulLinks view
    backFromHelpFulLinks: (state) => {
      state.showHelpFulLinks = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { goToHelpFulLinks, backFromHelpFulLinks } =
  helpFulLinksSlice.actions;

export default helpFulLinksSlice.reducer;
