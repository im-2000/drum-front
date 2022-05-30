// src/store/balance/slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kick: [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  snare: [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  clap: [null],
  tom: [null],
  ch: [null],
  oh: [null],
  crash: [null],
};

export const oneShotSamples = createSlice({
  name: "oneShotSamples",
  initialState,
  reducers: {
    addSample: (state, action) => {
      const sample = action.payload;
      const type = sample.type;
      console.log(sample);
      for (let i = 0; i < 16; i++) {
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
  },
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const { addSample, removeSample } = oneShotSamples.actions;

export default oneShotSamples.reducer;
