import React from "react";
import { useDispatch } from "react-redux";
import { setActiveMusic } from "../stores/actions";

const Card = ({ imageData, title, artists, setHoverImage }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(setActiveMusic({ imageData, title, artists }))}
      onMouseEnter={() => setHoverImage({ imageData })}
      onMouseLeave={() => setHoverImage(null)}
      className="rounded-xl mx-6  m-6 opacity-90 "
    >
      <div className="justify-center cursor-pointer items-center text-center  bg-black opacity-70 rounded-lg h-1/5 w-full">
        <div
          title={title}
          className="text-white text-2xl  font-semibold  mb-2 overflow-hidden whitespace-nowrap max-w-full truncate  "
        >
          {title}
        </div>
      </div>
      <img
        className="w-full h-full object-cover cursor-pointer rounded-xl"
        src={imageData}
        alt=""
      />
    </div>
  );
};

export default Card;
