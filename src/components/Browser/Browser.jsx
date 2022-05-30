import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllSamples, selectAllStyles } from "../../store/feed/selectors";
import { fetchAllSamples, fetchAllStyles } from "../../store/feed/actions";
import { Box } from "../Box";
import { Form } from "react-bootstrap";
import { addSample } from "../../store/channels/slice";
import { CgAdd } from "react-icons/cg";

export const Browser = () => {
  const dispatch = useDispatch();
  const samplesState = useSelector(selectAllSamples);
  const stylesState = useSelector(selectAllStyles);
  const [style, setStyle] = useState(0);
  const [type, setType] = useState("");
  const [filteredSamples, setFilteredSamples] = useState(samplesState);

  useEffect(() => {
    dispatch(fetchAllStyles);
    dispatch(fetchAllSamples);
  }, []);
  useEffect(() => {
    const filterSamples = (style, type) => {
      console.log(style, type);
      return samplesState.filter(
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
        <h2 style={{ color: "#42f5c8" }}>Browser</h2>
        &nbsp;
        <div>
          <p style={{ color: "violet" }}>Style</p>
          <Form.Select
            aria-label="Default select example"
            onChange={(event) => setStyle(parseInt(event.target.value))}
          >
            <option value="0">All</option>
            {stylesState.map((style) => (
              <option value={style.id}>{style.name}</option>
            ))}
          </Form.Select>
        </div>
        <div
          Style={{
            display: "flex",
            justifyContent: "row",
          }}
        >
          <p style={{ color: "violet" }}>Sample Type</p>
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
        &nbsp; &nbsp; &nbsp;
        <div>
          {filteredSamples.map((sample, idx) => {
            return (
              <>
                <Box
                  text={sample.name}
                  key={idx}
                  audio={sample.url}
                  className="sample"
                  sample={sample}
                  sampleState={samplesState}
                />
                <CgAdd
                  className="playIcon"
                  style={{ fontSize: "17" }}
                  id={sample.id}
                  onClick={(event) => {
                    dispatch(
                      addSample(
                        samplesState.find(
                          (sample) => sample.id === parseInt(event.target.id)
                        )
                      )
                    );
                  }}
                >
                  {" "}
                </CgAdd>
              </>
            );
          })}
        </div>
      </ul>
    </div>
  );
};
