import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  samples: [],
  styles: [],
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
    allStylesFetched: (state, action) => {
      const styles = action.payload;
      state.styles = [...styles];
      state.loading = false;
    },
  },
});

export const { allSamplesFetched, allStylesFetched } = feedSlice.actions;

export default feedSlice.reducer;
