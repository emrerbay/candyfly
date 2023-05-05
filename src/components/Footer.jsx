import React from "react";
import $ from "jquery";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CoverIcon from "../svg/cover.svg";
import MixIcon from "../svg/karistir.svg";
import BackIcon from "../svg/geri.svg";
import PauseIcon from "../svg/pause.svg";
import PlayIcon from "../svg/play.svg";
import NextIcon from "../svg/next.svg";
import ReplyIcon from "../svg/replay.svg";
import HeartIcon from "../svg/heart.svg";
import FilledHeartIcon from "../svg/fillheart.svg";
import WindowRestoreIcon from "../svg/window-restore.svg";
import MicIcon from "../svg/microphone.svg";
import BarsIcon from "../svg/bars.svg";
import LinkIcon from "../svg/link.svg";
import MuteIcon from "../svg/mute.svg";
import VlowIcon from "../svg/volume-low.svg";
import VhighIcon from "../svg/volume-high.svg";
import MaxscaleIcon from "../svg/maxscale.svg";

const Footer = () => {
  const { activeMusic } = useSelector((state) => ({
    activeMusic: state.site.activeMusic,
  }));
  const [liked, setLiked] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [time, setTime] = useState(0);

  $(document).ready(function () {
    const muteIcon = $("#mute-icon");
    const volumeRange = $("#volume-range");
    // let previousVolume = 100;

    muteIcon.on("click", function () {
      volumeRange.val(0);
      muteIcon.attr("src", MuteIcon);
    });

    volumeRange.on("input", function () {
      const volume = volumeRange.val();
      if (volume === "0") {
        muteIcon.attr("src", MuteIcon);
      } else if (volume > 0 && volume < 120) {
        muteIcon.attr("src", VlowIcon);
      } else {
        muteIcon.attr("src", VhighIcon);
      }
    });
  });

  useEffect(() => {
    let interval = null;
    if (clicked) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [clicked]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(1, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleChange = (event) => {
    setTime(parseInt(event.target.value));
  };
  return (
    <div className=" h-[96px] bg-[#181818] flex ">
      <div className="flex-none  w-[250px] h-[96px]  py-auto text-clip overflow-hidden relative">
        <div className="flex">
          <img
            className="w-14 h-12 m-3 cursor-pointer mt-5"
            src={activeMusic.imageData}
            alt="cover"
          ></img>
          <div className="text-white  w-180 font-light cursor-pointer mt-6 ">
            <span className="  text-white text-[14px] w-96 font-light mt-0 absolute hover:underline">
              {activeMusic.title}
            </span>
            <div className="flex text-[12px] w-96 mt-5">
              {activeMusic?.artists?.map((artist, index) => (
                <span key={index} className=" mr-1 hover:underline">
                  {artist.name + ","}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute h-16 top-0 -right-3 w-6 backdrop-blur-sm backdrop-filter "></div>
      </div>

      <div className="h-full w-[62px] flex-none cursor-pointer items-center">
        <div className="flex items-center  mt-7">
          <div className="w-4 h-4 flex items-center justify-center m-2">
            <img
              className="hover:scale-125  hover:text-white"
              src={liked ? FilledHeartIcon : HeartIcon}
              alt="like"
              onClick={() => setLiked(!liked)}
            />
          </div>
          <div className="w-3.5 h-3.5 flex items-center justify-center m-2 mt-2">
            <img
              className="hover:scale-125"
              src={WindowRestoreIcon}
              alt="like"
            />
          </div>
        </div>
      </div>

      <div className="w-full min-w-[260px]  flex-grow-0  ">
        <div className="flex justify-center mt-4 ">
          <div className="w-4.5 h-4.5 flex items-center cursor-pointer justify-center  ">
            <img className=" mt-4 hover:scale-125" src={MixIcon} alt="mix" />
          </div>
          <div className="w-3.5 h-3.5 flex items-center cursor-pointer justify-center mt-2.5 ml-4  ">
            <img className="hover:scale-125" src={BackIcon} alt="mix" />
          </div>
          <div className=" flex items-center justify-center cursor-pointer ml-4   bg-gray-200 rounded-full ">
            <img
              className="w-9 h-9  hover:scale-110"
              src={clicked ? PauseIcon : PlayIcon}
              alt="click"
              onClick={() => setClicked(!clicked)}
            />
          </div>
          <div className="w-3.5 h-3.5 flex  cursor-pointer items-center justify-center mt-2.5 ml-4  ">
            <img className="hover:scale-125" src={NextIcon} alt="mix" />
          </div>
          <div className="w-4.5 h-4.5 flex cursor-pointer items-center justify-center mt-2.5 ml-4  ">
            <img className="hover:scale-125" src={ReplyIcon} alt="mix" />
          </div>
        </div>
        <div className="w-4/5 mx-auto">
          <span className="text-gray-300 text-[11px]  font-semibold left-0">
            {formatTime(time)}
          </span>
          <div className="flex items-center justify-center   bg-white rounded-full">
            <input
              type="range"
              min="0"
              max="240"
              step="1"
              value={time}
              className="w-full h-1 bg-gray-300 rounded-lg hover:bg-green-600 appearance-none"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="right-0 max-w-[300px] min-w-[300px]  flex-grow-0">
        <div className="flex justify-center mt-7 ml-1 mr-4 right-0 ">
          <div className="w-4 h-4 flex items-center cursor-pointer  ">
            <img className=" mt-4 hover:scale-125" src={MicIcon} alt="mix" />
          </div>
          <div className="w-4 h-4 flex ml-4 items-center cursor-pointer   ">
            <img className=" mt-4 hover:scale-125" src={BarsIcon} alt="mix" />
          </div>
          <div className="w-5 h-5 flex ml-4 items-center cursor-pointer  ">
            <img className=" mt-4 hover:scale-125" src={LinkIcon} alt="mix" />
          </div>
          <div className="w-4.5 h-4.5 flex ml-4 items-center cursor-pointer   ">
            <img
              id="mute-icon"
              className=" mt-4 hover:scale-125"
              src={MuteIcon}
              alt="mix"
            />
          </div>
          <div className="mt-4 ml-2 ">
            <div className="flex items-center w-28 right-0  bg-white rounded-full">
              <input
                id="volume-range"
                type="range"
                min="0"
                max="240"
                step="1"
                className=" h-1 w-28 bg-gray-300 rounded-lg hover:bg-green-600 appearance-none"
              />
            </div>
          </div>
          <div className="w-4 h-4 flex ml-2 items-center cursor-pointer   ">
            <img
              className=" mt-5 hover:scale-125"
              src={MaxscaleIcon}
              alt="mix"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
