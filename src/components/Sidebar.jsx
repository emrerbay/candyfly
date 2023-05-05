import React from "react";
import SpotifyIcon from "../svg/spotify.svg";
import HomeIcon from "../svg/anasayfa.svg";
import SearchIcon from "../svg/ara.svg";
import LibraryIcon from "../svg/kitapligin.svg";
import PlusIcon from "../svg/calmalistesiolustur.svg";
import HeartIcon from "../svg/begenilensarkilar.svg";
import BookmarkIcon from "../svg/bolumlerin.svg";
import DownloadIcon from "../svg/uygulamayiyukle.svg";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylistnames } from "../stores/actions";
import { useEffect } from "react";

const Sidebar = () => {
  const { playlistnames } = useSelector((state) => ({
    playlistnames: state.spotify.playlistnames,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaylistnames());
  }, []);

  return (
    <div className="w-[250px]  bg-black overflow-hidden">
      <div className="items-start ml-2  text-[#a7a7a7] ">
        <div className="flex items-center my-2">
          <img
            className="w-12 p-1 text-slate-500 hover:text-white m-2"
            src={SpotifyIcon}
            alt="spotify"
          />
          <span className="text-white  text-2xl font-semibold">Spotify</span>
        </div>
        <div className="ml-2 mt-4 cursor-pointer ">
          <div className="flex items-center  hover:text-white  hover:bg-red-800">
            <img className="w-5  m-2  " src={HomeIcon} alt="anasayfa" />
            <span className=" text-[15px] font-semibold  ">Ana Sayfa</span>
          </div>
          <div className="flex  items-center hover:text-white hover:bg-green-800">
            <img className="w-5  m-2" src={SearchIcon} alt="ara" />
            <span className=" text-[15px] font-semibold">Ara</span>
          </div>
          <div className="flex items-center  hover:text-white  hover:bg-blue-800 ">
            <img className="w-5  m-2" src={LibraryIcon} alt="kitaplığın" />
            <span className=" text-[15px] font-semibold">Kitaplığın</span>
          </div>
          <div className="flex items-center mt-8  hover:text-white hover:bg-yellow-500">
            <img className="w-5 m-2" src={PlusIcon} alt="calmalistesiolustur" />
            <span className=" text-[15px] font-semibold">
              Çalma Listesi Oluştur
            </span>
          </div>
          <div className="flex items-center hover:text-white   hover:bg-purple-800 ">
            <div className="w-5 h-5 flex items-center justify-center  bg-indigo-600 rounded-[15%] m-2">
              <img className="w-2.5" src={HeartIcon} alt="begenilensarkilar" />
            </div>
            <span className=" text-[15px] font-semibold">
              Beğenilen Şarkılar
            </span>
          </div>
          <div className="flex items-center hover:text-white hover:bg-pink-700  ">
            <div className="w-5 h-5 flex items-center justify-center bg-green-800 rounded-[15%] m-2">
              <img className="w-2.5" src={BookmarkIcon} alt="bolumlerin" />
            </div>
            <span className=" text-[15px] font-semibold">Bölümlerin</span>
          </div>
        </div>
        <hr className="w-40 ml-10 mt-2 h-0.5  border-[#282828]"></hr>
        <div className="flex flex-col min-h-[45vh] cursor-pointer">
          <div className="flex flex-col bg-yellow-400 overflow-y-scroll max-h-[50vh] w-50  hover:text-white text-[15px] font-semibold ml-4"></div>
          <div className=" ml-3 overflow-auto flex-shrink text-[#a7a7a7] max-h-[60vh] mt-3">
            {playlistnames?.items?.map((list, index) => (
              <div
                className=" hover:text-white text-[14px] font-normal  mt-2"
                key={index}
              >
                {list.name}
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center  hover:bg-gray-600"></div>
          <div className="flex  bg-black 	cursor-pointer  hover:text-white items-center absolute bottom-[96px]">
            <img
              className="w-5 ml-4"
              src={DownloadIcon}
              alt="uygulamayiyukle"
            />
            <span className=" ml-3 p-2 bg-black   text-[14px] font-semibold">
              Uygulamayı Yükle
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
