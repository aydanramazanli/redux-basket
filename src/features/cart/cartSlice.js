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
    }, 
    increace:(state, {payload})=>{
      const itemId = state.cartItems.find((item)=>item.id ===payload.id)
      itemId.amount= itemId.amount+1
    },
    decrease:(state, {payload})=>{
      const itemId = state.cartItems.find((item)=>item.id ===payload.id)
      itemId.amount= itemId.amount-1
    }

  },
});

export const {clearBasket, removeItem, increace, decrease} = cartSlice.actions

export default cartSlice.reducer;
