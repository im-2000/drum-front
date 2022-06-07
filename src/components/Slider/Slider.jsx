import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { increaseBpm } from "../../store/drumMachine/slice";
import { selectBpm } from "../../store/drumMachine/selectors";
import { useDispatch, useSelector } from "react-redux";

export function SliderBpm() {
  const dispatch = useDispatch();
  const bpm = useSelector(selectBpm);

  return (
    <div className="control-panel">
      <div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <button>Clear channels</button>
      </div>

      <div>
        <Box width={300}>
          <Slider
            // min={0}
            // max={200}
            defaultValue={bpm}
            aria-label="Default"
            onChange={() => dispatch(increaseBpm())}
            valueLabelDisplay="auto"
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
