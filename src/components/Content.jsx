import React from "react";
import Anasayfa from "../modules/Anasayfa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylistById } from "../stores/actions";
import { playlistIds } from "../constant";
import {getAccessToken} from "../spotifyAPI"

const Content = () => {
  const { playlistArray } = useSelector((state) => ({
    playlistArray: state.spotify.playlistArray,
  }));
  const { activeMusic } = useSelector((state) => ({
    activeMusic: state.site.activeMusic,
  }));
  const [hoverImage, setHoverImage] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    window.console.log("Token:",getAccessToken())
    playlistIds.map((id) => dispatch(getPlaylistById(id)));
  }, []);

  return (
    <div
      className="max-h-[88vh] min-h-[88vh] overflow-auto min-w-full flex-shrink"
      style={{
        backgroundImage: `url(${hoverImage?.imageData ?? "none"})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: hoverImage?.imageData ? 0.7 : 1,
      }}
    >
      <Anasayfa
        playlistArray={playlistArray}
        setHoverImage={setHoverImage}
      ></Anasayfa>
    </div>
  );
};

export default Content;
