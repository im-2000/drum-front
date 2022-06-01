// src/store/balance/slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drums: [null, null, null, null],
  bass: [null, null, null, null],
  melody: [null, null, null, null],
  pad: [null, null, null, null],
};

export const channels = createSlice({
  name: "channels",
  initialState,
  reducers: {
    addSample: (state, action) => {
      const sample = action.payload;
      const type = sample.type;
      console.log(sample);
      for (let i = 0; i < 4; i++) {
        if (!state[type][i]) {
          state[type][i] = sample;
          break;
        }
      }
    },
    removeSample: (state, action) => {
      const { type, id } = action.payload;
      state[type][id] = null;
    },
    clearSamples: (state, action) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const { addSample, removeSample, clearSamples } = channels.actions;

export default channels.reducer;
