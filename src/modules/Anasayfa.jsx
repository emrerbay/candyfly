import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../components/Card";

const Anasayfa = ({ playlistArray, setHoverImage }) => {
  const [currentSlide, setCurrentSlide] = useState([0]);

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  useEffect(() => {
    setCurrentSlide(new Array(playlistArray.length).fill(0));
  }, [playlistArray]);

  const settings = (index) => {
    return {
      dots: true,
      focusOnSelect: true,
      infinite: true,
      speed: 250,
      slidesToShow:
        windowSize > 1350
          ? 7
          : windowSize > 1050
          ? 5
          : windowSize > 700
          ? 3
          : 1,
      slidesToScroll: windowSize > 1230 ? 4 : 1,
      centerMode: true,
      centerPadding: "1px",
      afterChange: (current) => {
        let tempSlide = { ...currentSlide };
        tempSlide[index] = current;
        setCurrentSlide(tempSlide);
      },
    };
  };
  const appendDots = (dots) => (
    <div style={{ position: "", bottom: "", width: "100%" }}>
      <ul style={{ margin: "0px " }}>{dots}</ul>
    </div>
  );

  return (
    <div className=" flex-shrink m-8 overflow-hidden">
      {playlistArray.map((list, keyIndex) => (
        <div key={keyIndex}>
          <div className="   mb-10 rounded-full    ">
            <div className="text-white text-2xl ml-10  font-semibold ">
              {list.name}
            </div>
          </div>
          <div className="mx-auto   mb-16  ">
            <div className="mx-auto  ">
              <div className=" mx-8  ">
                <Slider {...settings(keyIndex)} appendDots={appendDots}>
                  {list?.tracks?.items?.slice(0, 14).map((item, index) => (
                    <div
                      key={index}
                      className={
                        index === currentSlide[keyIndex]
                          ? "z-10 focus:z-10 scale-125"
                          : ""
                      }
                    >
                      <Card
                        imageData={item.track?.album?.images?.[0]?.url ?? ""}
                        title={item.track?.name ?? ""}
                        artists={item?.track?.artists}
                        setHoverImage={setHoverImage}
                        className={
                          index === currentSlide[keyIndex]
                            ? "z-10 shadow-md center "
                            : "shadow-md scale-75"
                        }
                        isActive={index === currentSlide[keyIndex]}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Anasayfa;
