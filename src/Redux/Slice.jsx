// // features/itemCountSlice.js
// import { createSlice } from '@reduxjs/toolkit';

//   const CartItemCountSlice = createSlice({
//   name: 'CartItemCount',
//   initialState: {
//     count: 0,
//   },
//   reducers: {
//     increment: (state) => {
//       state.count++;
//     },
//     decrement: (state) => {
//       if (state.count > 0) {
//         state.count--;
//       }
//     },
//     reset: (state) => {
//       state.count = 0;
//     },
//   },
// });

// export const { increment, decrement, reset } = CartItemCountSlice.actions;

// export default CartItemCountSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemExists = state.items.find(item => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
