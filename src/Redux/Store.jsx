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
// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import CartItemReducer  from './Slice';

export default configureStore({
  reducer: {
    CartItemCount:CartItemReducer
    
  },
});

