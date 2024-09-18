import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { products } from "../../db";
import axios from "axios";

export const fetchproducts = createAsyncThunk(
  "ProductSlice/fetchproducts",
  (category) => {
    if (!category) {
      return products;
    } else {
      return products.filter((product) => product.category === category);
    }
  }
);
const initialState = {
  status: "default",
  list: [],
};
const ProductSlice = createSlice({
  initialState,
  name: "productslice",
  reducers: {
    clear: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchproducts.pending, (state, action) => {
      state.status = "pending";
      return state;
    });
    builder.addCase(fetchproducts.fulfilled, (state, action) => {
      const list = action.payload;
      state.list = list;
      state.status = "fulfilled";
      return state;
    });
  },
});

export const { clear } = ProductSlice.actions;
export default ProductSlice.reducer;
