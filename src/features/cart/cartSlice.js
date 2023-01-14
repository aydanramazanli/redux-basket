import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 2,
  total: 0,
  isLoading: true,
};

const url = "https://course-api.com/react-useReducer-cart-project";
export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearBasket: (state) => {
      state.cartItems = [];
      // return{
      //   cartItems:[]
      // }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increace: (state, { payload }) => {
      const itemId = state.cartItems.find((item) => item.id === payload.id);
      itemId.amount = itemId.amount + 1;
    },
    decrease: (state, { payload }) => {
      const itemId = state.cartItems.find((item) => item.id === payload.id);
      itemId.amount = itemId.amount - 1;
    },
    totalPrice: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearBasket, removeItem, increace, decrease, totalPrice } =
  cartSlice.actions;

export default cartSlice.reducer;
