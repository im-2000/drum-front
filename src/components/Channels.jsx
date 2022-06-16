import "./channel_rack.css";
import { useSelector } from "react-redux";
import { removeSample } from "../store/channels/slice";
import { Box } from "./Box";
import {
  selectDrums,
  selectMelody,
  selectBass,
  selectPad,
} from "../store/channels/selectors";

export const Channels = (props) => {
  const drums = useSelector(selectDrums);
  const bass = useSelector(selectBass);
  const melody = useSelector(selectMelody);
  const pad = useSelector(selectPad);

  const onRightClick = (sample) => {
    if (sample) {
      removeSample(sample);
    }
  };

  return (
    <div id="sampler" className="channels">
      <div>
        <p
          className="channel-name"
          style={{
            color: "red",
          }}
        >
          DRUMS
        </p>
        {drums.map((sample, idx) => (
          <Box
            text={sample ? sample.name : ""}
            key={idx}
            audio={sample ? sample.url : ""}
            className="box"
            onRightClick={() => onRightClick({ type: "drums", id: 1 })}
          />
        ))}
      </div>
      <div>
        <p
          className="channel-name"
          style={{
            color: "violet",
          }}
        >
          BASS
        </p>
        {bass.map((sample, idx) => (
          <Box
            text={sample ? sample.name : ""}
            key={idx}
            audio={sample ? sample.url : ""}
            className="box"
            onRightClick={onRightClick}
          />
        ))}
      </div>
      <div>
        <p
          className="channel-name"
          style={{
            color: "#13D6A7",
          }}
        >
          MELODY
        </p>
        {melody.map((sample, idx) => (
          <Box
            text={sample ? sample.name : ""}
            key={idx}
            audio={sample ? sample.url : ""}
            className="box"
            onRightClick={onRightClick}
          />
        ))}
      </div>
      <div>
        <p
          className="channel-name"
          style={{
            color: "yellow",
          }}
        >
          PAD
        </p>
        {pad.map((sample, idx) => (
          <Box
            text={sample ? sample.name : ""}
            key={idx}
            audio={sample ? sample.url : ""}
            preload="auto"
            className="box"
            onRightClick={onRightClick}
          />
        ))}
      </div>
    </div>
  );
};
