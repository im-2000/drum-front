export const selectAllSamples = (reduxState) => {
  return reduxState.feedReducer.samples;
};

export const selectAllStyles = (reduxState) => {
  return reduxState.feedReducer.styles;
};

export const selectOneShotSamples = (reduxState) => {
  return reduxState.feedReducer.omeShotSamples;
};
