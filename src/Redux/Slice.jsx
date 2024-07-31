// features/itemCountSlice.js
import { createSlice } from "@reduxjs/toolkit";

const CartItemCountSlice = createSlice({
  name: "CartItemCount",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count--;
      }
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = CartItemCountSlice.actions;

export default CartItemCountSlice.reducer;
