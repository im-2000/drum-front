import "./channel_rack.css";
import React from "react";
import { Component } from "react";

export const ChannelRack = (props) => {
  return (
    <div id="display" className="display">
      {props.sounds.map((sound, idx) => (
        <Box text={sound.key} key={idx} audio={sound.sampleUrl} />
      ))}
    </div>
  );
};

// const Box = (props) => (
//   <div className="box">
//     {props.text}
//     <audio src={props.sample} className="clip" id={props.text} />
//   </div>
// );

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }

  playSound = () => {
    this.audio.current.play();
  };

  render() {
    const { text, audio } = this.props;

    return (
      <div className="box" onClick={this.playSound}>
        {text}
        <audio ref={this.audio} src={audio} className="clip" id={text} />
      </div>
    );
  }
}
