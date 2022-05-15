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
    drumSamplesFetched: (state, action) => {
      const samples = action.payload;
      state.samples = [...samples];
      state.loading = false;
    },
    // detailsFetched: (state, action) => {
    //   state.details = action.payload;
    //   state.loading = false;
    // },
  },
});

export const { drumSamplesFetched, detailsFetched } = feedSlice.actions;

export default feedSlice.reducer;
