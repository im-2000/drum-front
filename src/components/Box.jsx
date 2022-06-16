import React, { useState, useEffect, useRef } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { CgAdd } from "react-icons/cg";
import { addSample } from "../store/channels/slice";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../store/user/slice";
import { selectFavorites } from "../store/user/selectors";
import { BsStar } from "react-icons/bs";

export const Box = (props) => {
  const audioRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const playStop = (e) => {
    setPlaying(!isPlaying);
    !isPlaying
      ? e.target.classList.add("active")
      : e.target.classList.remove("active");
  };
  // useEffect(() => {
  //   audioRef.current.addEventListener("timeupdate", function () {
  //     let buffer = 0.14;
  //     if (audioRef.current.currentTime > audioRef.current.duration - buffer) {
  //       audioRef.current.currentTime = 0;
  //       audioRef.current.play();
  //     }
  //   });
  // });

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.loop = true;
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      audioRef.current.loop = false;
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
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
              onClick={() => dispatch(toggleFavorites(props.sample.id))}
              className={
                favorites.includes(props.sample.id)
                  ? "playIcon active"
                  : "playIcon"
              }
            ></BsStar>
          )}
        </div>
        &nbsp;
        <div>
          {className === "sample" && (
            <BsPlayCircle className="playIcon" onClick={playStop} />
          )}
        </div>
        &nbsp;
        <div>
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
        </div>
        &nbsp; &nbsp;
        <div className={className} onClick={playStop}>
          {text}
          <audio ref={audioRef} preload="auto" src={audio} id={text} />
        </div>
        &nbsp; &nbsp;
      </div>
    </>
  );
};
