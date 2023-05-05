import { combineReducers } from "@reduxjs/toolkit";
import siteReducer from "./siteSlice";
import spotifyReducer from "./spotifySlice";

const rootReducer = combineReducers({
  site: siteReducer,
  spotify: spotifyReducer,
});

export default rootReducer;
