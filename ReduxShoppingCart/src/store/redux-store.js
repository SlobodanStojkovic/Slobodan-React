import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;

/* REDUCERS MUST be pure, side-effect free, synchronous functions. */
/* NEVER USE REDUCERS FOR ASYNC CODE */