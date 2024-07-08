import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: true,
  },
  reducers: {
    rooz: (state) => {
      state.value = true;
    },

    shab: (state) => {
      state.value = false;
    },
  },
});