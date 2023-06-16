import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const hoverImageSlice = createSlice({
  name: "hoverImage",
  initialState,
  reducers: {
    setHoverImage: (state, action) => {
      return action.payload;
    },
    clearHoverImage: () => null,
  },
});

export const { setHoverImage, clearHoverImage } = hoverImageSlice.actions;
export default hoverImageSlice.reducer;