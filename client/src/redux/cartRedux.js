import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => { // action pass data and redux use state curr and caculator
      state.quantity += action.payload.quantity;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    initialState: (state) => {
      state.quantity =0
      state.products=[]
      state.total =0
    }
  },
});

export const { addProduct, initialState } = cartSlice.actions;

export default cartSlice.reducer;
