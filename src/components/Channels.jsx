import "./channel_rack.css";
import React from "react";
import background from "../image/circle.jpeg";
import { useState } from "react";

export const Channels = (props) => {
  return (
    <div
      id="display"
      className="display"
      //   style={{ backgroundImage: `url(${background})` }}
    >
      {props.sounds.map((sound, idx) => (
        <Box text={sound.key} key={idx} audio={sound.sampleUrl} />
      ))}
    </div>
  );
};

class Box extends React.Component {
  constructor(props) {
    super(props);

    this.audio = React.createRef();
  }

  componentDidMount() {
    this.audio.current.addEventListener("ended", (e) => {
      const parent = e.target.parentNode;
      parent.classList.remove("active");
    });
  }

  playSound = () => {
    this.audio.current.play();

    const parent = this.audio.current.parentNode;
    parent.classList.add("active");
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

document.addEventListener("keydown", (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);

  if (audio) {
    audio.pause();
    const parent = audio.parentNode;
    parent.classList.add("active");
    audio.play();
  }
});
