import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { flexbox } from "@mui/system";

export function SliderBpm() {
  return (
    <Box width={300}>
      {/* <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      /> */}
      <Slider
        defaultValue={50}
        aria-label="Default"
        valueLabelDisplay="auto"
        style={{
          color: "red",
          width: 600,
        }}
      />
    </Box>
  );
}
