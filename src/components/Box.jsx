import React, { useState, useEffect, useRef } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { CgAdd } from "react-icons/cg";
import { addSample, removeSample } from "../store/channels/slice";
import { useDispatch, useSelector } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { toggleFavorites } from "../store/user/slice";
import { selectUser } from "../store/user/selectors";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { BsStar } from "react-icons/bs";

export const Box = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "sample",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const audioRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const playStop = (e) => {
    setPlaying(!isPlaying);
    !isPlaying
      ? e.target.classList.add("active")
      : e.target.classList.remove("active");
  };
  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", function () {
      let buffer = 0.01;
      if (audioRef.current.currentTime > audioRef.current.duration - buffer) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    });

    //   audioRef.current.addEventListener("ended", (e) => {
    //     audioRef.current.play();
    //   });
  });
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlaying]);
  const { text, audio, className } = props;

  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          {className === "sample" && (
            <BsStar
              // style={{ blockSize: 18 }}
              className="playIcon"
              onClick={() => dispatch(toggleFavorites(props.sample.id))}
            ></BsStar>
          )}
        </div>
        &nbsp;
        <div>
          {className === "sample" && (
            <BsPlayCircle
              className="playIcon"
              onClick={playStop}
              // style={{ blockSize: 20 }}
            />
          )}
        </div>
        &nbsp;
        <div>
          {className === "sample" && (
            <CgAdd
              // style={{ blockSize: 20 }}
              className="playIcon"
              id={props.sample.id}
              onClick={(event) => {
                dispatch(addSample(props.sample));
              }}
            >
              {" "}
            </CgAdd>
          )}
        </div>
        &nbsp;
        <div className={className} onClick={playStop}>
          {text}
          <audio ref={audioRef} src={audio} className="clip" id={text} />
        </div>
        &nbsp;
      </div>
    </>
  );
};
