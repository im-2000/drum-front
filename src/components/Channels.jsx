import "./channel_rack.css";
import React, { useEffect } from "react";
import background from "../image/circle.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { selectAllSamples } from "../store/feed/selectors";
import { fetchAllSamples } from "../store/feed/actions";
import { Link } from "react-router-dom";
import { selectDrums } from "../store/channels/selectors";
import { toggleDrums } from "../store/channels/slice";
import { Box } from "./Box";

export const Channels = (props) => {
  const dispatch = useDispatch();
  const samplesState = useSelector(selectAllSamples);
  console.log("samplesState", samplesState);

  useEffect(() => {
    dispatch(fetchAllSamples);
  }, []);

  return (
    <div>
      <div id="display" className="display">
        {samplesState.samples.map((sample, idx) => (
          <Box
            text={sample.name}
            key={idx}
            audio={sample.url}
            className="box"
          />
        ))}
      </div>
      {/* <div id="display" className="display">
        {props.bass.map((b, idx) => (
          <Box text={b.name} key={idx} audio={b.url} />
        ))}
      </div> */}
    </div>
  );
};
