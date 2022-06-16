import React, { useState, useEffect, useRef } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { CgAdd } from "react-icons/cg";
import { addSample } from "../store/channels/slice";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../store/user/slice";
import { selectFavorites } from "../store/user/selectors";
import { BsStar } from "react-icons/bs";
import * as Tone from "tone";

export const Box = (props) => {
  // const player = useRef(null);
  const [isPlaying, setPlaying] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const player = new Tone.Player(props.audio).toDestination();
  // const buffer = new Tone.ToneAudioBuffer(props.audio, () => {
  //   console.log("loaded");
  // });

  const playStop = (e) => {
    setPlaying(!isPlaying);
    !isPlaying
      ? e.target.classList.add("active")
      : e.target.classList.remove("active");
  };

  // // prioritize sustained playback
  // const context = new Tone.Context({ latencyHint: "interactive" });
  // // set this context as the global Context
  // Tone.setContext(context);
  // // the global context is gettable with Tone.getContext()
  // console.log(Tone.getContext().latencyHint);

  // const loop = new Tone.Loop(function (time) {
  //   //triggered every eighth note.
  //   console.log(time);
  // }, "16n").start(0);
  // Tone.Transport.start();

  useEffect(() => {
    if (isPlaying) {
      player.current.loop = true;
      player.current.currentTime = 0;
      player.current.play();
    } else {
      player.current.loop = false;
      player.current.currentTime = 0;
      player.current.pause();
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
          <audio ref={player} preload="auto" src={audio} id={text} />
        </div>
        &nbsp; &nbsp;
      </div>
    </>
  );
};
