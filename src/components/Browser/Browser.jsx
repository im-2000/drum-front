import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllSamples } from "../../store/feed/selectors";
import { fetchAllSamples } from "../../store/feed/actions";
import { Box } from "../Box";

export const Browser = () => {
  const dispatch = useDispatch();
  const samplesState = useSelector(selectAllSamples);

  useEffect(() => {
    dispatch(fetchAllSamples);
  }, []);

  return (
    <div
      className="browser"
      style={{
        color: "blueviolet",
        marginTop: 60,
        marginLeft: 30,
        width: 200,
        height: 1000,
        color: "white",
      }}
    >
      <ul>
        <h3 style={{ color: "#42f5c8" }}>Browser</h3>
        {samplesState.samples.map((sample, idx) => {
          return (
            <>
              <Box
                text={sample.name}
                key={idx}
                audio={sample.url}
                className="sample"
              />
            </>
          );
        })}
      </ul>
    </div>
  );
};
