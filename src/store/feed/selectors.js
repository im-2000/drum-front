export const selectAllSamples = (reduxState) => {
  const samples = reduxState.feedReducer.samples;
  const loading = reduxState.feedReducer.loading;

  return { samples, loading };
};