import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/product";
import cartReducers from "./slices/cart";
import themeReducer from "./slices/theme";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducers,
    theme: themeReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
