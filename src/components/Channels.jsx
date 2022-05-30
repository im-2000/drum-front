import "./channel_rack.css";
import React, { useEffect } from "react";
import background from "../image/circle.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { selectAllSamples } from "../store/feed/selectors";
import { fetchAllSamples } from "../store/feed/actions";
import { Link } from "react-router-dom";
import { removeSample, toggleDrums } from "../store/channels/slice";
import { Box } from "./Box";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import {
  selectDrums,
  selectMelody,
  selectBass,
  selectPad,
} from "../store/channels/selectors";

export const Channels = (props) => {
  const dispatch = useDispatch();
  const drums = useSelector(selectDrums);
  const bass = useSelector(selectBass);
  const melody = useSelector(selectMelody);
  const pad = useSelector(selectPad);

  return (
    <div id="display" className="sampler">
      <div className="drums">
        <p
          style={{
            color: "red",
            fontSize: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          DRUMS
        </p>
        {drums.map((sample, idx) => (
          <Box
            text={sample ? sample.name : ""}
            key={idx}
            audio={sample ? sample.url : ""}
            className="box"
          />
        ))}
      </div>
      <div>
        <p
          style={{
            color: "#42f5c8",
            fontSize: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          BASS
        </p>
        {bass.map((sample, idx) => (
          <Box
            text={sample ? sample.name : ""}
            key={idx}
            audio={sample ? sample.url : ""}
            className="box"
          />
        ))}
      </div>
      <div>
        <p
          style={{
            color: "orange",
            fontSize: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          MELODY
        </p>
        {melody.map((sample, idx) => (
          <Box
            text={sample ? sample.name : ""}
            key={idx}
            audio={sample ? sample.url : ""}
            className="box"
          />
        ))}
      </div>
      <div>
        <p
          style={{
            color: "yellow",
            fontSize: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          PAD
        </p>
        {pad.map((sample, idx) => (
          <Box
            text={sample ? sample.name : ""}
            key={idx}
            audio={sample ? sample.url : ""}
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
