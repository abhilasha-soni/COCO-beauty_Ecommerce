import { Item } from "../../types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  makeup: Item[];
  isLoading: boolean;
  wishlist: Item[];
  category: Item[];
  searchResult: Item[];
  search: string;
  productDetails: Item;
};

const initialState: InitialState = {
  makeup: [],
  isLoading: true,
  wishlist: [],
  category: [],
  searchResult: [],
  search: "",
  productDetails: {
    id: 0,
    brand: "",
    name: "",
    price: "",
    price_sign: "",
    currency: "",
    image_link: "",
    description: "",
    product_type: "",
    api_featured_image: "",
    quantity: 0,
    product_category : " "
  },
};

const productSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    productData: (state, actions: PayloadAction<Item[]>) => {
      state.makeup = actions.payload;
      state.isLoading = false;
    },

    productDetails: (state, actions: PayloadAction<Item>) => {
      state.productDetails = actions.payload;
    },

    addToWishlist: (state, actions: PayloadAction<Item>) => {
      const wishlistItem = state.wishlist.some(
        (item) => item.id === actions.payload.id
      );
      if (wishlistItem) {
        state.wishlist = state.wishlist.filter(
          (item) => item.id !== actions.payload.id
        );
      } else {
        state.wishlist.push(actions.payload);
      }
    },

    searchItem: (state, actions: PayloadAction<string>) => {
      const result = state.makeup.filter((item) =>
        item.name.toLowerCase().includes(actions.payload.toLowerCase())
      );
      state.makeup = result;
    },
  },
});

export const actions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
