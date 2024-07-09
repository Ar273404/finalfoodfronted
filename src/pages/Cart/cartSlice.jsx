// // src/features/cart/cartSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
//   totalAmount: 0,
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItem(state, action) {
//       const newItem = action.payload;
//       state.items.push(newItem);
//       state.totalAmount += newItem.price * newItem.quantity;
//     },
//     removeItem(state, action) {
//       const id = action.payload;
//       const existingItem = state.items.find(item => item.id === id);
//       if (existingItem) {
//         state.totalAmount -= existingItem.price * existingItem.quantity;
//         state.items = state.items.filter(item => item.id !== id);
//       }
//     },
//     clearCart(state) {
//       state.items = [];
//       state.totalAmount = 0;
//     },
//   },
// });

// export const { addItem, removeItem, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;
