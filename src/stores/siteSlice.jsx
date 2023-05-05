import { createSlice } from "@reduxjs/toolkit";

export const site = createSlice({
  name: "site",
  initialState: {
    dark: false,
    activeMusic: {},
  },
  reducers: {
    setDarkMode: (state) => {
      state.dark = !state.dark;
    },
    setActiveMusic: (state, action) => {
      console.log("action", action);
      state.activeMusic = action.payload;
    },
  },
});

export const { setDarkMode, setActiveMusic } = site.actions;

export default site.reducer;
