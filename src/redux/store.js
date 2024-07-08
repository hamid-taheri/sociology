import { configureStore } from "@reduxjs/toolkit";
import { conunterSlice } from "./counterSlice";
import { themeSlice } from "./themeSlice";

export const store = configureStore({
  reducer: {
    counter: conunterSlice.reducer,
    theme: themeSlice.reducer,
  },
});
