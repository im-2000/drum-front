import { Channels } from "../components/Channels";
import { Analyser } from "../components/Analyser";
import { Browser } from "../components/Browser/Browser";
import { Navigation } from "../components/Navigation";
import "../components/channel_rack.css";
import background from "../image/circle.jpeg";

import { selectToken } from "../store/user/selectors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Sampler = () => {
  // const AudioContext = window.AudioContext || window.webkitAudioContext;
  // const audioContext = new AudioContext();

  // const token = useSelector(selectToken);
  // const navigate = useNavigate();

  // if (token === null) {
  //   navigate("/");
  // }

  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div
        className="sampler"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div>
          <Browser />
        </div>
        <div>
          <Channels />
        </div>
        <div>
          <Analyser />
        </div>
      </div>
    </div>
  );
};
