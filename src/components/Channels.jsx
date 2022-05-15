import "./channel_rack.css";
import React, { useEffect } from "react";
import background from "../image/circle.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getDrumSamplesState } from "../store/feed/selectors";
import { fetchDrumSamples } from "../store/feed/thunks";
import { Link } from "react-router-dom";
import { selectDrums } from "../store/channels/selectors";
import { toggleDrums } from "../store/channels/slice";
import { Box } from "./Box2";

export const Channels = (props) => {
  const dispatch = useDispatch();
  const samplesState = useSelector(getDrumSamplesState);
  console.log("samplesState", samplesState);

  useEffect(() => {
    dispatch(fetchDrumSamples);
  }, []);

  return (
    <div>
      <div id="display" className="display">
        {samplesState.samples.map((drum, idx) => (
          <Box text={drum.name} key={idx} audio={drum.url} />
        ))}
      </div>
      <div id="display" className="display">
        {props.bass.map((b, idx) => (
          <Box text={b.name} key={idx} audio={b.url} />
        ))}
      </div>
    </div>
  );
};
