import React, { useState, useEffect, useRef } from "react";

export const Box2 = (props) => {
  const audioRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);

  const playStop = (e) => {
    setPlaying(!isPlaying);
    !isPlaying
      ? e.target.classList.add("active")
      : e.target.classList.remove("active");
  };
  // useEffect(() => {
  //   audioRef.current.addEventListener("timeupdate", function () {
  //     let buffer = 0.13;
  //     if (audioRef.current.currentTime > audioRef.current.duration - buffer) {
  //       // audioRef.current.currentTime = 0;
  //       // audioRef.current.play();
  //     }
  //   });

  //   audioRef.current.addEventListener("ended", (e) => {
  //     audioRef.current.play();
  //   });
  // });
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlaying]);
  const { text, audio } = props;

  return (
    <div className="box2" onClick={playStop}>
      {text}
      <audio ref={audioRef} src={audio} className="clip" id={text} />
    </div>
  );
};
