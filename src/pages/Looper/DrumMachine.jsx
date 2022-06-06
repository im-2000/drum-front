import { useEffect, useState } from "react";
import * as Tone from "tone";

const kick = new Tone.Player(
  "https://audio.jukehost.co.uk/JRVKYWCmgRxpKCI3ijAsm61z29599GmC"
).toDestination();
const snare = new Tone.Player(
  "https://audio.jukehost.co.uk/nA3BlaP27nLNre0gHihDWhDngWeg5HAk"
).toDestination();
const clap = new Tone.Player(
  "https://audio.jukehost.co.uk/ovksH6BwP0eyhnMMITe8cijRDP8cmPQR"
).toDestination();
const tom = new Tone.Player(
  "https://audio.jukehost.co.uk/ruoGZEOmXLugBKDsFhwWoS43Va1U6GOk"
).toDestination();
const ch = new Tone.Player(
  "https://audio.jukehost.co.uk/xQyC8nIW7CxX6O7L9y68NDFuNI9bBKIA"
).toDestination();
const oh = new Tone.Player(
  "https://audio.jukehost.co.uk/MLaQPc07Eg9RYDtj19Y708ZWHMf4ZWyu"
).toDestination();
const crash = new Tone.Player(
  "https://audio.jukehost.co.uk/J3XUUjWl7nb9qK69HO8rgbri1c7YC3GM"
).toDestination();

export const DrumMachine = () => {
  const [inputs, setInputs] = useState({
    kick: new Array(16).fill(false),
    snare: new Array(16).fill(false),
    clap: new Array(16).fill(false),
    tom: new Array(16).fill(false),
    ch: new Array(16).fill(false),
    oh: new Array(16).fill(false),
    crash: new Array(16).fill(false),
  });

  const check = (type, idx) => {
    const newInputs = [...inputs[type]];
    newInputs[idx] = !newInputs[idx];
    setInputs({ ...inputs, [type]: newInputs });
  };

  useEffect(() => {
    let step = 0;
    function repeat() {
      let index = step % 16;
      if (inputs.kick[index]) {
        kick.start();
      }
      if (inputs.snare[index]) {
        snare.start();
      }
      if (inputs.clap[index]) {
        clap.start();
      }
      if (inputs.tom[index]) {
        tom.start();
      }
      if (inputs.ch[index]) {
        ch.start();
      }
      if (inputs.oh[index]) {
        oh.start();
      }
      if (inputs.crash[index]) {
        crash.start();
      }

      step++;
    }
    const eventId = Tone.Transport.scheduleRepeat(repeat, "16n");
    Tone.Transport.start();

    return () => Tone.Transport.clear(eventId);
  }, [inputs]);

  return Object.keys(inputs).map((type, key) => (
    <div key={key}>
      <p style={{ color: "white" }}>{type}</p>
      <div className="row">
        {inputs[type].map((input, index) => (
          <input
            className="box2"
            type="checkbox"
            key={index}
            checked={input}
            onChange={() => check(type, index)}
          />
        ))}
      </div>
    </div>
  ));
};
