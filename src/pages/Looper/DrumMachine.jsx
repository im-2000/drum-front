import { useEffect, useState } from "react";
import * as Tone from "tone";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseBpm,
  decreaseBpm,
  setBpm,
} from "../../store/drumMachine/slice";
import { selectBpm } from "../../store/drumMachine/selectors";
import { BsPinMap } from "react-icons/bs";
import { SliderBpm } from "../../components/Slider/Slider";

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
    KICK: new Array(16).fill(false),
    SNARE: new Array(16).fill(false),
    CLAP: new Array(16).fill(false),
    TOM: new Array(16).fill(false),
    CH: new Array(16).fill(false),
    OH: new Array(16).fill(false),
    CRASH: new Array(16).fill(false),
  });

  const [bpm, setBpm] = useState(80);

  const dispatch = useDispatch();
  // const bpm = useSelector(selectBpm);

  const check = (type, idx) => {
    const newInputs = [...inputs[type]];
    newInputs[idx] = !newInputs[idx];
    setInputs({ ...inputs, [type]: newInputs });
  };

  useEffect(() => {
    Tone.Transport.stop();
    let step = 0;
    function repeat() {
      let index = step % 16;
      if (inputs.KICK[index]) {
        kick.start();
      }
      if (inputs.SNARE[index]) {
        snare.start();
      }
      if (inputs.CLAP[index]) {
        clap.start();
      }
      if (inputs.TOM[index]) {
        tom.start();
      }
      if (inputs.CH[index]) {
        ch.start();
      }
      if (inputs.OH[index]) {
        oh.start();
      }
      if (inputs.CRASH[index]) {
        crash.start();
      }

      step++;
    }
    const eventId = Tone.Transport.scheduleRepeat(repeat, "16n");
    Tone.Transport.bpm.value = bpm;

    Tone.Transport.start();

    return () => Tone.Transport.clear(eventId);
  }, [inputs, bpm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${bpm}`);
  };

  return (
    <div>
      <div className="bpm-value">
        <form onSubmit={handleSubmit}>
          <label className="drums-type">
            BPM:
            <input
              style={{ width: 50 }}
              type="text"
              value={bpm}
              onChange={(e) => setBpm(e.target.value)}
            />
          </label>
        </form>
      </div>

      <div>
        {Object.keys(inputs).map((type, key) => (
          <div key={key} className="drums-container">
            <div className="drums-type">{type}</div>
            <div>
              {inputs[type].map((input, index) => (
                <input
                  className="checkbox"
                  type="checkbox"
                  key={index}
                  checked={input}
                  onChange={() => check(type, index)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
