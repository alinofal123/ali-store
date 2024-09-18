import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/Product-slice";
import cartSlice from "./slices/cart-slice";

export const Store = configureStore({
  reducer: {
    products: ProductSlice,
    cart: cartSlice,
  },
});
