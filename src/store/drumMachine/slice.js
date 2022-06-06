// src/store/balance/slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bpm: 80,
};

export const drumMachine = createSlice({
  name: "drumMachine",
  initialState,
  reducers: {
    increaseBpm: (state) => {
      state.bpm = state.bpm + 10;
    },
    decreaseBpm: (state) => {
      state.bpm = state.bpm - 10;
    },
  },
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const { increaseBpm, decreaseBpm } = drumMachine.actions;

export default drumMachine.reducer;
