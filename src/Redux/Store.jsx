// // src/store.js
// import CartItemReducer from './Slice'
// import { configureStore } from '@reduxjs/toolkit'
// const store = configureStore({
//   reducer: {
//     // cart: cartReducer,
//     CartItemCount:CartItemReducer
//   },
// });

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
