import * as Tone from "tone";
import { Player } from "tone";
import { Transport } from "tone";
import React, { useState, useEffect, useRef } from "react";

export const Box3 = (props) => {
  const audioRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);

  const player = new Tone.Player(setPlaying).toDestination();
  // play as soon as the buffer is loaded
  player.autostart = true;

  const { text, audio } = props;

  return <audio ref={audioRef} src={audio} className="clip" id={text} />;
};
