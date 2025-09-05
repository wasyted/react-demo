import { configureStore } from "@reduxjs/toolkit";
import uiSlice from './ui-slice';
import cartSlice from "./cart-slice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    auth: authSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;