import React, { useState, useEffect, useRef } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { CgAdd } from "react-icons/cg";
import { addSample } from "../store/channels/slice";
import { useDispatch, useSelector } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { toggleFavorites } from "../store/user/slice";
import { selectUser } from "../store/user/selectors";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

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
          {/* <Tooltip title="Add to favorites">
            <IconButton> */}
          {className === "sample" && (
            <AiOutlineStar
              onClick={() => dispatch(toggleFavorites(props.sample.id))}
            ></AiOutlineStar>
          )}
          {/* </IconButton>
          </Tooltip> */}
        </div>
        &nbsp;
        {className === "sample" && (
          <BsPlayCircle className="playIcon" onClick={playStop} />
        )}
        &nbsp;
        {className === "sample" && (
          <CgAdd
            className="playIcon"
            id={props.sample.id}
            onClick={(event) => {
              dispatch(addSample(props.sample));
            }}
          >
            {" "}
          </CgAdd>
        )}
        &nbsp;
        <div className={className} onClick={playStop} ref={drag}>
          {text}
          <audio ref={audioRef} src={audio} className="clip" id={text} />
        </div>
        &nbsp;
      </div>
    </>
  );
};
