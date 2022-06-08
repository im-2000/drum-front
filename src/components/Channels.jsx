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
            fontSize: 25,
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
            fontSize: 25,
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
            onRightClick={onRightClick}
          />
        ))}
      </div>
      <div>
        <p
          className="channel-name"
          style={{
            color: "#13D6A7",
            fontSize: 25,
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
            fontSize: 25,
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
    </div>
  );
};
