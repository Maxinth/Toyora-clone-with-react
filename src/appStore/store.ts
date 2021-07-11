import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import hamburgerReducer from "../features/MobileDropDown/mobileDropDownSlice";
import vehiclesReducer from "../features/MobileDropDown/vehiclesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    hamburger: hamburgerReducer,
    vehicles: vehiclesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
