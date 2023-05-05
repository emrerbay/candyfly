import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";

function App() {
  const { dark } = useSelector((state) => state.site);

  return (
    <div className="">
      <div className="wrapper">
        <div className="flex  ">
          <Sidebar />
        </div>
        <div className=" flex-1 w-full overflow-hidden">
          <div className={`overflow-hidden ${dark ? "dark" : "light"}`}>
            <div className="">
              <Header />
            </div>
            <div className="foverflow-hidden">
              <Content />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full fixed bottom-0 ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
