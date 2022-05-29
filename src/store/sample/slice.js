// src/store/balance/slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const sample = createSlice({
  name: "sample",
  initialState,
  reducers: {
    selectSample: (state, action) => {
      state = action.payload;
    },
    deselectSample: (state, action) => {
      state = null;
    },
  },
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const { selectSample, deselectSample } = sample.actions;

export default sample.reducer;
