import { createSlice } from "@reduxjs/toolkit";

export interface ownersViewState {
  showOwners: boolean;
}

const initialState: ownersViewState = {
  showOwners: false,
};

export const ownersSlice = createSlice({
  name: "owners",
  initialState,
  reducers: {
    //show all owners
    goToAllOwners: (state) => {
      state.showOwners = true;
    },
    // return to initial view from all owners view
    backFromAllOwners: (state) => {
      state.showOwners = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { goToAllOwners, backFromAllOwners } = ownersSlice.actions;

export default ownersSlice.reducer;
