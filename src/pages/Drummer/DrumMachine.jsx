import { useEffect, useState } from "react";
import * as Tone from "tone";
import { FaPlay } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";
import { FaStop } from "react-icons/fa";
import { ImLoop } from "react-icons/im";

const kick = new Tone.Player(
  "https://audio.jukehost.co.uk/blbhMsutbiTUGy10c43Abs3nS0byRe8S"
).toDestination();
const snare = new Tone.Player(
  "https://audio.jukehost.co.uk/Bk2jccXQ8TlF64Hxp7oXeWN9k1zlgDzF"
).toDestination();
const clap = new Tone.Player(
  "https://audio.jukehost.co.uk/ovksH6BwP0eyhnMMITe8cijRDP8cmPQR"
).toDestination();
const tom = new Tone.Player(
  "https://audio.jukehost.co.uk/ruoGZEOmXLugBKDsFhwWoS43Va1U6GOk"
).toDestination();
const ch = new Tone.Player(
  "https://audio.jukehost.co.uk/awUGU9sCcqe4VSe1UJOgtm31awwaNw4v"
).toDestination();
const oh = new Tone.Player(
  "https://audio.jukehost.co.uk/MLaQPc07Eg9RYDtj19Y708ZWHMf4ZWyu"
).toDestination();
// const crash = new Tone.Player(
//   "https://audio.jukehost.co.uk/J3XUUjWl7nb9qK69HO8rgbri1c7YC3GM"
// ).toDestination();

export const DrumMachine = () => {
  const [inputs, setInputs] = useState({
    KICK: new Array(16).fill(false),
    SNARE: new Array(16).fill(false),
    CLAP: new Array(16).fill(false),
    TOM: new Array(16).fill(false),
    CH: new Array(16).fill(false),
    OH: new Array(16).fill(false),
    // CRASH: new Array(16).fill(false),
  });

  const [bpm, setBpm] = useState(80);
  const [started, setStarted] = useState(false);
  const [loop, setLoop] = useState(false);

  // const dispatch = useDispatch();
  // const bpm = useSelector(selectBpm);

  const check = (type, idx) => {
    const newInputs = [...inputs[type]];
    newInputs[idx] = !newInputs[idx];
    setInputs({ ...inputs, [type]: newInputs });
  };

  useEffect(() => {
    if (!loop) {
      Tone.Transport.stop();
    }
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
      // if (inputs.CRASH[index]) {
      //   crash.start();
      // }

      step++;
    }
    const eventId = Tone.Transport.scheduleRepeat(repeat, "16n");
    Tone.Transport.bpm.value = bpm;

    // Tone.Transport.start();

    return () => Tone.Transport.clear(eventId);
  }, [inputs, bpm, loop]);

  const handleBpm = (event) => {
    event.preventDefault();
    alert(`Your bpm: ${bpm}`);
  };

  const loopHandle = () => {
    setLoop(!loop);
  };

  const play = () => {
    // !Tone.Transport.start() ? Tone.Transport.stop() : Tone.Transport.start();
    if (!started) {
      Tone.start();
      setStarted(true);
    }
    Tone.Transport.start();
  };

  const pause = () => {
    Tone.Transport.pause();
  };

  const stop = () => {
    Tone.Transport.stop();
    setStarted(false);
  };

  const reset = () => {
    setInputs({
      KICK: new Array(16).fill(false),
      SNARE: new Array(16).fill(false),
      CLAP: new Array(16).fill(false),
      TOM: new Array(16).fill(false),
      CH: new Array(16).fill(false),
      OH: new Array(16).fill(false),
      // CRASH: new Array(16).fill(false),
    });
  };

  // const playStop = (e) => {
  //   setPlaying(!isPlaying);
  //   !isPlaying
  //     ? e.target.classList.add("active")
  //     : e.target.classList.remove("active");
  // };

  return (
    <div className="drums-box">
      <div className="bpm-value">
        <div className="drummer-transport">
          <div>
            <button
              className="button-browser"
              onClick={play}
              style={{ color: "#10DD2D" }}
            >
              <FaPlay />
            </button>
          </div>
          <div>
            <button
              className="button-browser"
              onClick={pause}
              style={{ color: "#FFBB00" }}
            >
              <IoMdPause />
            </button>
          </div>
          <div>
            <button
              className="button-browser"
              onClick={stop}
              style={{ color: "red" }}
            >
              <FaStop />
            </button>
          </div>
          <div>
            <button
              className="button-browser"
              onClick={reset}
              style={{ color: "orange" }}
            >
              Reset
            </button>
          </div>

          {/* <div>
            <button className="button-browser" style={{ color: "red" }}>
              REC
            </button>
          </div> */}
          <div>
            <button
              className="button-browser"
              onClick={loopHandle}
              style={{ color: "orange" }}
            >
              <ImLoop />
            </button>
          </div>
        </div>
        &nbsp; &nbsp; &nbsp;
        <div className="bpm">
          <form onSubmit={handleBpm}>
            <label
              style={{
                color: "orange",
                WebkitTextStroke: " 1px black",
                fontSize: 29,
              }}
            >
              BPM: &nbsp;
              <input
                style={{ width: 45, height: 30, fontSize: 20 }}
                type="text"
                value={bpm}
                onChange={(e) => setBpm(e.target.value)}
              />
            </label>
          </form>
        </div>
      </div>
      &nbsp;
      <div className="drums-outer">
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
