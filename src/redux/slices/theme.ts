import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  theme: string;
};

const initialState: InitialState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "webTheme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      if (state.theme === "light") {
        state.theme = "dark"
      } else {
        state.theme = "light"
      }
    }
  },
});

export const themeActions = themeSlice.actions;
const themeReducer = themeSlice.reducer;
export default themeReducer;