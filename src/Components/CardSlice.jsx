import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
   amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
    },
    increaseQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item.quantity > 1) item.quantity -= 1;
    },
    calculateTotal: (state) => {
      let total = 0;
      let amount = 0;
      
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * Number(item.price*item.quantity);
        
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { addToCart, removeFromCart,calculateTotal, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
