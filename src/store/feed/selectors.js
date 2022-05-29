export const selectAllSamples = (reduxState) => {
  return reduxState.feedReducer.samples;
};

export const selectAllStyles = (reduxState) => {
  return reduxState.feedReducer.styles;
};
