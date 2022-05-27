import { allSamplesFetched } from "./slice";

import axios from "axios";

const API_URL = `http://localhost:4000`;

export async function fetchAllSamples(dispatch, getState) {
  try {
    const response = await axios.get(`${API_URL}/samples`);

    dispatch(allSamplesFetched(response.data));
  } catch (e) {
    // setDownLoading
    // setError
    console.log(e.message);
  }
}
