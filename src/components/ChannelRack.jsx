import "./channel_rack.css";
import React from "react";

export const ChannelRack = (props) => {
  return (
    <div id="display" className="display">
      {props.sounds.map((sound, idx) => (
        <Box text={sound.key} key={idx} audio={sound.sample} />
      ))}
    </div>
  );
};
this.audio = React.createRef;

const playSound = (props) => {
  this.audio.current.play();
};

export const Box = (props) => (
  <div className="box" onClick={playSound}>
    {props.text}
    <audio src={props.audio} className="clip" id={props.text} />
  </div>
);
