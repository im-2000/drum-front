import "./channel_rack.css";
import React, { useEffect, useState } from "react";
import background from "../image/circle.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { selectAllSamples } from "../store/feed/selectors";
import { fetchAllSamples } from "../store/feed/actions";
import { Link } from "react-router-dom";
import { removeSample, toggleDrums } from "../store/channels/slice";
import { Box } from "./Box";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import { useDrag, useDrop } from "react-dnd";
import { Recorder } from "./Recorder/Recorder";
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

  // const [board, setBoard] = useState([]);

  // const [{ isOver }, drop] = useDrop(() => ({
  //   accept: "sample",
  //   drop: (item) => addSampleToBoard(item.id),
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // }));

  // const addSampleToBoard = (id) => {
  //   console.log("id", id);
  // };

  const onRightClick = (sample) => {
    if (sample) {
      removeSample(sample);
    }
  };

  return (
    <div id="sampler" className="channels">
      <div>
        <p
          className="channel-name"
          style={{
            color: "red",
            fontSize: 20,
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            // backgroundColor: "black",
            // borderRadius: 20,
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
            onRightClick={() => onRightClick({ type: "drums", id: 1 })}
          />
        ))}
      </div>
      <div>
        <p
          className="channel-name"
          style={{
            color: "violet",
            fontSize: 20,
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            // backgroundColor: "black",
            // borderRadius: 20,
          }}
        >
          BASS
        </p>
        {bass.map((sample, idx) => (
          // <drop>
          <Box
            text={sample ? sample.name : ""}
            key={idx}
            audio={sample ? sample.url : ""}
            className="box"
            onRightClick={onRightClick}
          />
          // </drop>
        ))}
      </div>
      <div>
        <p
          className="channel-name"
          style={{
            color: "#13D6A7",
            fontSize: 20,
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            // backgroundColor: "black",
            // borderRadius: 20,
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
            onRightClick={onRightClick}
          />
        ))}
      </div>
      <div>
        <p
          className="channel-name"
          style={{
            color: "yellow",
            fontSize: 20,
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            // backgroundColor: "black",
            // borderRadius: 20,
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
            onRightClick={onRightClick}
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
