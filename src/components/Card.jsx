import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setActiveMusic } from "../stores/actions";
import ColorThief from "colorthief";

const Card = ({ imageData, title, artists, setHoverImage }) => {
  const dispatch = useDispatch();
  const [dominantColor, setDominantColor] = useState(null);

  useEffect(() => {
    const getDominantColor = () => {
      const colorThief = new ColorThief();
      const img = new Image();
      img.crossOrigin = "Anonymous"; // Cross-origin image access
      img.src = imageData;

      img.onload = () => {
        const color = colorThief.getColor(img);
        setDominantColor(color);
      };
    };

    getDominantColor();
  }, [imageData]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--dominant-color", `rgb(${dominantColor?.join(",")})`);
  }, [dominantColor]);

  return (
    <div
      onClick={() => dispatch(setActiveMusic({ imageData, title, artists }))}
     
      onMouseLeave={() => setHoverImage(null)}
      className="rounded-xl mx-6 m-7 opacity-90"
     
    >
      <div className="justify-center cursor-pointer items-center text-center shadow-2xl bg-black opacity-70 rounded-lg px-3 h-1/5 w-full">
        <div
          title={title}
          className="text-white text-xl font-medium mb-2 overflow-hidden whitespace-nowrap max-w-full truncate"
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
