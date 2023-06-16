import axios from "axios";

const apiURL = "https://api.spotify.com/v1";
const clientId = "e116d1d58a714c6db3e5d71ac7666b39";
const clientSecret = "eb28be07c7914523a68c9b9e0a2a9f56";
const authToken ="BQBI-DRI9ldnZrdKg51s0YBEVDeDf71nm8TYxpGwKTPhQlNH06YvQFiUp-dQScF2x5zcZKq8BxMiHzcLi9EjD_tAsRVshJj_ADf_iqQY_6A_saErWqw";

export async function getAccessToken() {
  try {
    const authString = `${clientId}:${clientSecret}`;
    const encoder = new TextEncoder();
    const data = encoder.encode(authString);
    const encodedAuthString = btoa(String.fromCharCode.apply(null, data));

    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      null,
      {
        headers: {
          Authorization: `Basic ${encodedAuthString}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        params: {
          grant_type: "client_credentials",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Access token request failed:", error);
    throw error;
  }
}


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
