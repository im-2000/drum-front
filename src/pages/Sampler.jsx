import { Channels } from "../components/Channels";
import { Analyser } from "../components/Analyser";
import { Browser } from "../components/Browser/Browser";
// import Recorder from "../components/Recorder/Recorder";
import { Navigation } from "../components/Navigation";
import { SliderBpm } from "../components/Slider/Slider";
import "../components/channel_rack.css";
import background from "../image/circle.jpeg";

import { selectToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Sampler = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();

  const token = useSelector(selectToken);
  const navigate = useNavigate();

  if (token === null) {
    navigate("/");
  }

  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div
        className="container"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div>
          <Browser />
        </div>
        <div>
          <Channels />
        </div>
        <div>
          {/* <Recorder /> */}
          <Analyser audioContext={audioContext} />
        </div>
      </div>
    </div>
  );
};
