import React from "react";
import BackIcon from "../svg/back.svg";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode } from "../stores/actions";

const Header = () => {
  const { dark } = useSelector((state) => state.site);
  const dispatch = useDispatch();

  return (
    <header className="flex w-full min-h-[64px] border-[#1D1D1D] border-b-[1px] rounded-3xl relative">
      <div className="flex items-center justify-center w-7 h-7 mt-4 ml-4 bg-white rounded-full cursor-pointer">
        <img className="w-5 h-5" src={BackIcon} alt="click" />
      </div>

      <div className="font-semibold absolute top-1/2 transform -translate-y-1/2 right-4">
        <button
          className="bg-gradient-to-r  w-36 from-gray-400 to-black rounded-md p-1 ring-2 hover:scale-105 ring-gray-500 ring-inset"
          onClick={() => dispatch(setDarkMode())}
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
