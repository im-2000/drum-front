import React, { useEffect, useState, useRef } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { selectAllSamples } from "../../store/feed/selectors";
import { fetchAllSamples } from "../../store/feed/actions";

export const Browser = () => {
  const dispatch = useDispatch();
  const samplesState = useSelector(selectAllSamples);

  const audioRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);
  const playStop = (e) => {
    setPlaying(!isPlaying);
    !isPlaying
      ? e.target.classList.add("active")
      : e.target.classList.remove("active");
  };
  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", function () {
      let buffer = 0.13;
      if (audioRef.current.currentTime > audioRef.current.duration - buffer) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    });

    // audioRef.current.addEventListener("ended", (e) => {
    //   audioRef.current.play();
    // });
  });
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  //   const { text, audio } = samplesState;

  useEffect(() => {
    dispatch(fetchAllSamples);
  }, []);

  return (
    <div
      className="browser"
      style={{
        color: "white",
        backgroundColor: "grey",
        marginTop: 0,
        width: 200,
        height: 1000,
      }}
    >
      <ul>
        {samplesState.samples.map((sample, idx) => {
          return (
            <div key={idx}>
              <BsPlayCircle onClick={playStop} />
              &nbsp;
              {sample.name}
              <audio
                ref={audioRef}
                src={sample.url}
                className="clip"
                // id={text}
              />
              {/* {text} */}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
