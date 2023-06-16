import { combineReducers } from "@reduxjs/toolkit";
import siteReducer from "./siteSlice";
import spotifyReducer from "./spotifySlice";

import hoverImageReducer from "./hoverImageReducer";

const rootReducer = combineReducers({
  site: siteReducer,
  spotify: spotifyReducer,
  hoverImage: hoverImageReducer,
});

export default rootReducer;
