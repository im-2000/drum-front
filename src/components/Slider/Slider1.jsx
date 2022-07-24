import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import React from "react";

import { render } from "react-dom";
import Slider from "rc-slider";

import react from "react";

export const Slider = () => {
  const [bpm, setBpm] = useState(80);

  return (
    <div>
      <Slider
        min={0}
        max={100}
        defaultValue={this.state.value}
        onChange={(value) => {
          this.setState({ value });
        }}
      />
      <div>Value is {this.state.value}</div>
    </div>
  );
};
