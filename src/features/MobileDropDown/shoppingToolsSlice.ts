import { createSlice } from "@reduxjs/toolkit";

export interface shoppingToolsState {
  showShoppingTools: boolean;
}

const initialState: shoppingToolsState = {
  showShoppingTools: false,
};

export const shoppingToolsSlice = createSlice({
  name: "shoppingTools",
  initialState,
  reducers: {
    //show all shoppingTools
    showAllShoppingTools: (state) => {
      state.showShoppingTools = true;
    },
    // return to initial view from all shoppingTools view
    backFromAllShoppingTools: (state) => {
      state.showShoppingTools = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showAllShoppingTools, backFromAllShoppingTools } =
  shoppingToolsSlice.actions;

export default shoppingToolsSlice.reducer;
