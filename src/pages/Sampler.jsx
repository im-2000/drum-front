import { Channels } from "../components/Channels";
import { Analyser } from "../components/Analyser";
import { Browser } from "../components/Browser/Browser";
import { Recorder } from "../components/Recorder/Recorder";
import { Navigation } from "../components/Navigation";
import { SliderBpm } from "../components/Slider/Slider";
import "../components/channel_rack.css";
import background from "../image/circle.jpeg";

import { selectToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Sampler = () => {
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  if (token === null) {
    navigate("/");
  }

  return (
    <div
      className="container"
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
  );
};
