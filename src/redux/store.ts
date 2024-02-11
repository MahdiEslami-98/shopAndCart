import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart.slice";
import searchSlice from "./slices/search.slice";

const store = configureStore({
  reducer: {
    cartState: cartSlice,
    searchState: searchSlice,
  },
  devTools: true,
});

export default store;
