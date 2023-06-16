import React, { useEffect, useState } from "react";
import ColorThief from "colorthief";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";

function App() {
  
  const { dark, activeMusic } = useSelector(state => ({
    dark: state.site,
    activeMusic: state.site.activeMusic,
  }));

  const [dominantColor, setDominantColor] = useState(null);

  useEffect(() => {
    const getDominantColor = async () => {
      const colorThief = new ColorThief();
      const img = new Image();
      img.crossOrigin = "Anonymous"; // Cross-origin image access
      img.src = activeMusic.imageData;

      await img.decode();
      const color = colorThief.getColor(img);
      setDominantColor(color);
    };

    getDominantColor();
  }, [activeMusic]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--dominant-color", `rgb(${dominantColor?.join(",")})`);
    
    const lightBackground = document.querySelector(".light");
    if (lightBackground) {
      lightBackground.style.background = `rgb(${dominantColor?.join(",")})`;
    }
  }, [dominantColor]);

  return (
    <div className="">
      <div className="wrapper">
        <div className="flex">
          <Sidebar />
        </div>
        <div className="flex-1 w-full overflow-hidden">
          <div className={`overflow-hidden ${dark ? "dark" : "light"}`} style={{ background: `rgb(${dominantColor?.join(",")})` }}>
            <div className="">
              <Header />
            </div>
            <div className="overflow-hidden">
              <Content />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full fixed bottom-0" >
        <Footer />
      </div>
    </div>
  );
}

export default App;
