import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from "../features/MobileDropDown/mobileDropDownSlice";
import vehiclesReducer from "../features/MobileDropDown/vehiclesSlice";
import shoppingToolsReducer from "../features/MobileDropDown/shoppingToolsSlice";
import helpfulLinksReducer from "../features/MobileDropDown/helpFulLinksSlice";
import ownersReducer from "../features/MobileDropDown/ownersSlice";
import locationModalReducer from "../features/locationModalAndSearch";

export const store = configureStore({
  reducer: {
    hamburger: hamburgerReducer,
    vehicles: vehiclesReducer,
    shoppingTools: shoppingToolsReducer,
    helpFulLinks: helpfulLinksReducer,
    owners: ownersReducer,
    locationModal: locationModalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
