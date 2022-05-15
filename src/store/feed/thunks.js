import { drumSamplesFetched } from "./slice";
import axios from "axios";

const API_URL = `http://localhost:4000`;

export async function fetchDrumSamples(dispatch, getState) {
  try {
    const response = await axios.get(`${API_URL}/samples/drums`);
    console.log("response", response);
    const samples = response.data;
    dispatch(drumSamplesFetched(samples));
  } catch (e) {
    // setDownLoading
    // setError
    console.log(e.message);
  }
}
