import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { decreaseBpm, increaseBpm } from "../../store/drumMachine/slice";
import { selectBpm } from "../../store/drumMachine/selectors";
import { useDispatch, useSelector } from "react-redux";

export function SliderBpm() {
  const dispatch = useDispatch();
  const bpm = useSelector(selectBpm);

  // const [bpm, setBpm] = useState(80);

  const handleBpm = () => {
    const initialBpm = 80;
    if (initialBpm) {
      dispatch(increaseBpm);
    } else {
      dispatch(decreaseBpm);
    }
  };

  return (
    <div className="control-panel">
      <div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <button>Clear channels</button>
      </div>

      <div>
        <Box width={300}>
          <Slider
            defaultValue={bpm}
            onChange={handleBpm()}
            style={{
              color: "white",
              width: 650,
            }}
          />
          <div>Value is {bpm}</div>
        </Box>
      </div>
    </div>
  );
}
