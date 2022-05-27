import { Channels } from "../components/Channels";
import { Analyser } from "../components/Analyser";
import { Browser } from "../components/Browser/Browser";
import "../components/channel_rack.css";
import background from "../image/circle.jpeg";

export const MainPage = () => {
  return (
    <div
      id="drum-machine"
      className="container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <Browser />
      </div>
      <div>
        <Channels />
      </div>
      {/* <div>
        <Analyser />
      </div> */}
    </div>
  );
};
