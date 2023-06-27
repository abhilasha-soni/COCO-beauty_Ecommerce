import { actions } from "./product";

import { Item } from "./../../types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type cart = {
  cartitems: Item;
  quantity: number;
};

type InitialState = {
  items: cart[];
};

const initialState: InitialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    addToCart: (state, actions: PayloadAction<Item>) => {
      const cartItem = state.items.find(
        (item) => item.cartitems.id === actions.payload.id
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({ cartitems: actions.payload, quantity: 1 });
      }
    },

    increment: (state, actions: PayloadAction<Item>) => {
      const addItem: any = state.items.find(
        (product) => product.cartitems.id === actions.payload.id
      );
      addItem.quantity++;
    },

    decrement: (state, actions: PayloadAction<Item>) => {
      const subtractItem: any = state.items.find(
        (product) => product.cartitems.id === actions.payload.id
      );
      if (subtractItem.quantity === 1) {
        subtractItem.quantity = 1;
      } else {
        subtractItem.quantity--;
      }
    },

    deleteItem: (state, actions: PayloadAction<Item>) => {
      const deleteItem = state.items.filter(
        (item) => item.cartitems.id !== actions.payload.id
      );
      state.items = deleteItem;
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducers = cartSlice.reducer;
export default cartReducers;
