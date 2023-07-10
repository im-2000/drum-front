import {
  allSamplesFetched,
  allStylesFetched,
  oneShotSamplesFetched,
} from "./slice";

import axios from "axios";

// const API_URL = `https://tweak-peak.herokuapp.com`;
const API_URL = `http://localhost:4000/`;

export async function fetchAllSamples(dispatch, getState) {
  try {
    const response = await axios.get(`${API_URL}/samples`);

    console.log("response", response);
    dispatch(allSamplesFetched(response.data));
  } catch (e) {
    // setDownLoading
    // setError
    console.log(e.message);
  }
}

export const fetchFilteredSamples =
  (style, type) => async (dispatch, getState) => {
    try {
      const response = await axios.get(`${API_URL}/samples/${style}/${type}`);

      console.log("response", response);
      dispatch(allSamplesFetched(response.data));
    } catch (e) {
      // setDownLoading
      // setError
      console.log(e.message);
    }
  };

export async function fetchAllStyles(dispatch, getState) {
  try {
    const response = await axios.get(`${API_URL}/styles`);

    console.log("response", response);
    dispatch(allStylesFetched(response.data));
  } catch (e) {
    // setDownLoading
    // setError
    console.log(e.message);
  }
}

export async function fetchOneShotSamples(dispatch, getState) {
  try {
    const response = await axios.get(`${API_URL}/samples/oneshot`);

    console.log("response", response);
    dispatch(oneShotSamplesFetched(response.data));
  } catch (e) {
    // setDownLoading
    // setError
    console.log(e.message);
  }
}
