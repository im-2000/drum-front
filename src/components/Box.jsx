import React, { useState, useEffect, useRef } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { RiStarSLine } from "react-icons/ri";
import { CgAdd } from "react-icons/cg";
import { addSample } from "../store/channels/slice";
import { useDispatch } from "react-redux";

export const Box = (props) => {
  const audioRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);

  const dispatch = useDispatch();

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
            <button>
              <RiStarSLine className="playIcon" />
            </button>
          )}
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
              dispatch(
                addSample(
                  props.samplesState.find(
                    (sample) => sample.id === parseInt(event.target.id)
                  )
                )
              );
            }}
          >
            {" "}
          </CgAdd>
        )}
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
