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
    // return{
    //   cartItems:[]
    // }
    },
    removeItem : (state, action)=>{
      const  itemId = action.payload
      state.cartItems= state.cartItems.filter(item => item.id !== itemId)
    }
  },
});

export const {clearBasket, removeItem} = cartSlice.actions

export default cartSlice.reducer;
