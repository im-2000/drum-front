import { useEffect, useState } from "react";
import * as Tone from "tone";

const kick = new Tone.Player(
  "https://audio.jukehost.co.uk/JRVKYWCmgRxpKCI3ijAsm61z29599GmC"
).toDestination();
const snare = new Tone.Player(
  "https://audio.jukehost.co.uk/nA3BlaP27nLNre0gHihDWhDngWeg5HAk"
).toDestination();

export const DrumMachine = () => {
  const [inputs, setInputs] = useState({
    kick: new Array(8).fill(false),
    snare: new Array(8).fill(false),
    // kick: new Array(8).fill(false),
    // kick: new Array(8).fill(false),
    // kick: new Array(8).fill(false),
    // kick: new Array(8).fill(false),
    // kick: new Array(8).fill(false),
  });

  const check = (type, idx) => {
    const newInputs = [...inputs[type]];
    newInputs[idx] = !newInputs[idx];
    setInputs({ ...inputs, [type]: newInputs });
  };

  useEffect(() => {
    let step = 0;
    function repeat() {
      let index = step % 8;
      if (inputs.kick[index]) {
        kick.start();
      }
      if (inputs.snare[index]) {
        snare.start();
      }
      step++;
    }
    const eventId = Tone.Transport.scheduleRepeat(repeat, "8n");
    Tone.Transport.start();

    return () => Tone.Transport.clear(eventId);
  }, [inputs]);

  return Object.keys(inputs).map((type, key) => (
    <div key={key}>
      <p>{type}</p>
      {inputs[type].map((input, index) => (
        <input
          type="checkbox"
          key={index}
          checked={input}
          onChange={() => check(type, index)}
        />
      ))}
    </div>
  ));
};
