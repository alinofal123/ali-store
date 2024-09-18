import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  initialState: [],
  name: "cartslice",
  reducers: {
    addtocart: (state, action) => {
      const findProducts = state.find((x) => x.id === action.payload.id);
      if (findProducts) {
        findProducts.quantiti += 1;
      } else {
        const productClone = { ...action.payload, quantiti: 1 };
        state.push(productClone);
      }
    },
    deleteFromcart: (state, action) => {
      state.shift(action.payload);
    },
    clearCart: (state, action) => {
      return [];
    },
  },
});

export const { addtocart, clearCart } = cartslice.actions;
export default cartslice.reducer;
