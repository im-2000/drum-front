import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  samples: [],
  details: null,
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    allSamplesFetched: (state, action) => {
      const samples = action.payload;
      state.samples = [...samples];
      state.loading = false;
    },
  },
});

export const { allSamplesFetched } = feedSlice.actions;

export default feedSlice.reducer;
