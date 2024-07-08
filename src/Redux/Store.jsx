// src/store.js
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../pages/Cart/cartSlice'
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
