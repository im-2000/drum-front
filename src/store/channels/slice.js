// src/store/balance/slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  channels: [
    { id: 0, power: false },
    { id: 1, power: false },
    { id: 2, power: false },
    { id: 3, power: false },
    { id: 4, power: false },
    { id: 5, power: false },
    { id: 6, power: false },
    { id: 7, power: false },
    { id: 8, power: false },
    { id: 9, power: false },
    { id: 10, power: false },
    { id: 11, power: false },
    { id: 12, power: false },
    { id: 13, power: false },
    { id: 14, power: false },
    { id: 15, power: false },
    { id: 16, power: false },
    { id: 17, power: false },
    { id: 18, power: false },
    { id: 19, power: false },
    { id: 20, power: false },
    { id: 21, power: false },
    { id: 22, power: false },
    { id: 23, power: false },
    { id: 24, power: false },
  ],
};

export const channels = createSlice({
  name: "channels",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const {} = channels.actions;

export default channels.reducer;
