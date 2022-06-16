import * as React from "react";
// import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
// import { selectBpm } from "../../store/drumMachine/selectors";
// import { useDispatch, useSelector } from "react-redux";

export function SliderBpm() {
  // const dispatch = useDispatch();
  // const bpm = useSelector(selectBpm);

  return (
    <div className="control-panel">
      <div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <button>Clear channels</button>
      </div>

      <div>
        <Box width={300}>
          <Slider
            defaultValue={{}}
            onChange={{}}
            style={{
              color: "white",
              width: 650,
            }}
          />
          <div>Value is {{}}</div>
        </Box>
      </div>
    </div>
  );
}
