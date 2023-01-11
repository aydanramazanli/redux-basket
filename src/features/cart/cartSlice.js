import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 2,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearBasket: (state) => {
      state.cartItems = [];
    },
  },
});

export const {clearBasket} = cartSlice.actions

export default cartSlice.reducer;
