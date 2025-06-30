import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CardSlice';

// import modalReducer from './features/modal/modalSlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
   
    
  },
});