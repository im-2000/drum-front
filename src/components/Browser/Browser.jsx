import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllSamples } from "../../store/feed/selectors";
import { fetchAllSamples, fetchAllStyles } from "../../store/feed/actions";
import { Box } from "../Box";
import { Form } from "react-bootstrap";
import { clearSamples } from "../../store/channels/slice";
import { samples } from "./../../sample/samples";
// import { styles } from "./../../sample/styles";

export const Browser = () => {
  const dispatch = useDispatch();

  const [style, setStyle] = useState(0);
  const [type, setType] = useState("");
  const samplesState = useSelector(selectAllSamples);
  // const stylesState = useSelector(selectAllStyles);
  const [filteredSamples, setFilteredSamples] = useState(samples);

  useEffect(() => {
    dispatch(fetchAllStyles);
    dispatch(fetchAllSamples);
  }, [dispatch]);

  useEffect(() => {
    const filterSamples = (style, type) => {
      return samples.filter(
        (sample) =>
          (sample.styleId === style || style === 0) &&
          (sample.type === type || type === "")
      );
    };
    setFilteredSamples(filterSamples(style, type));
  }, [style, type, samplesState]);

  return (
    <div className="browser">
      <ul>
        <div>
          <button
            className="button-browser"
            onClick={() => dispatch(clearSamples())}
          >
            Reset channels
          </button>
          &nbsp; &nbsp; &nbsp;
          <button className="button-browser">Upload sample</button>
        </div>
        <div className="filters">
          {/* <div>
            <p style={{ color: "#42f5c8" }}>Style</p>
            <Form.Select
              aria-label="Default select example"
              onChange={(event) => setStyle(parseInt(event.target.value))}
            >
              <option value="0">All</option>
              {styles.map((style, idx) => (
                <option key={idx} value={style.id}>
                  {style.name}
                </option>
              ))}
            </Form.Select>
          </div>
          &nbsp; &nbsp; &nbsp; */}
          <div>
            <p style={{ color: "#42f5c8" }}>Type</p>
            <Form.Select
              aria-label="Default select example"
              onChange={(event) => setType(event.target.value)}
            >
              <option value="">All</option>
              <option value="drums">Drums</option>
              <option value="bass">Bass</option>
              <option value="melody">Melody</option>
              <option value="pad">Pad</option>
            </Form.Select>
          </div>
        </div>

        <div className="sampleList">
          {filteredSamples.map((sample, idx) => {
            return (
              <div key={idx}>
                <Box
                  text={sample.name}
                  key={idx}
                  audio={sample.url}
                  className="sample"
                  sample={sample}
                  sampleState={samplesState}
                />
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
};
