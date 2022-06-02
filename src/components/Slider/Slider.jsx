import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export function SliderBpm() {
  return (
    <div className="control-panel">
      <div>
        <button>Upload sample</button>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <button>Clear channels</button>
      </div>

      <div>
        <Box width={300}>
          <Slider
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
            style={{
              color: "white",
              width: 650,
            }}
          />
        </Box>
      </div>
    </div>
  );
}
