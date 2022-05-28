import { Channels } from "../components/Channels";
import { Analyser } from "../components/Analyser";
import { Browser } from "../components/Browser/Browser";
import "../components/channel_rack.css";
import background from "../image/circle.jpeg";
// import { SideBar } from "../components/SideBar/SideBar";

export const MainPage = () => {
  return (
    <div
      className="container"
      // style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <Browser />
      </div>
      {/* <div>
        <SideBar />
      </div> */}

      <div>
        <Channels />
      </div>
      <div>
        <Analyser />
      </div>
    </div>
  );
};
