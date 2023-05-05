import axios from "axios";

const apiURL = "https://api.spotify.com/v1";
const clientId = "e116d1d58a714c6db3e5d71ac7666b39";
const clientSecret = "eb28be07c7914523a68c9b9e0a2a9f56";
const authToken =
  "BQDesDxR3ihLdUkmT2McaMVq-Q1UKkISznNbSFiVfbBiLUDFzn0jJ3AuSpluI65U8ujC9qP2SlSiiCQVKO1fmuil9b6MRtvcN24vrDRSkS_ALXQ4xJDAPshNhsxUH3kpQAE5fpd572CT-fYcbr8h-uqC7TfgTSNmfyIydDlVjfIsSc6SX2dUU1gOLz26WtE";

export async function getPlayListById(playlistIds) {
  const { data } = await axios.get(`${apiURL}/playlists/${playlistIds}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });
  return data;
}

export async function getPlayListNames() {
  const { data } = await axios.get(`${apiURL}/users/emrerbay.st/playlists`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });
  return data;
}

export async function getToken() {
  const { data } = await axios({
    url: "https://accounts.spotify.com/api/token",
    method: "post",
    params: {
      grant_type: "client_credentials",
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  });
  return data;
}
