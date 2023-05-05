import { createSlice } from "@reduxjs/toolkit";
import { getToken as getTokenRequest } from "../spotifyAPI";
import { getPlayListById as getPlayListByIdRequest } from "../spotifyAPI";
import { getPlayListNames as getPlayListNamesRequest } from "../spotifyAPI";

const SpotifyState = {
  token: "",
  playlistArray: [],
  playlistnames: {},
};

const spotify = createSlice({
  name: "spotify",
  initialState: SpotifyState,
  reducers: {
    getAccesstoken: (state, action) => {
      state.token = action.payload;
    },
    getPlayListeById: (state, action) => {
      state.playlistArray.push(action.payload);
    },

    getPlayListeNames: (state, action) => {
      state.playlistnames = action.payload;
    },
  },
});

export const { getAccesstoken, getPlayListeById, getPlayListeNames } =
  spotify.actions;

export const token = () => async (dispatch) => {
  try {
    const response = await getTokenRequest();
    dispatch(getAccesstoken(response));
  } catch (err) {
    console.log(err);
  }
};
export const getPlaylistById = (playlistIds) => async (dispatch) => {
  try {
    const response = await getPlayListByIdRequest(playlistIds);
    dispatch(getPlayListeById(response));
  } catch (err) {
    console.log(err);
  }
};

export const getPlaylistnames = () => async (dispatch) => {
  try {
    const response = await getPlayListNamesRequest();
    dispatch(getPlayListeNames(response));
  } catch (err) {
    console.log(err);
  }
};

export default spotify.reducer;
