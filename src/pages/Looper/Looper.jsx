import React, { useState, useEffect, useRef } from "react";
import background from "../../image/drums.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { Box2 } from "../../components/Box2";
import { Browser } from "../../components/Browser/Browser";
import { fetchOneShotSamples } from "../../store/feed/actions";
import { selectOneShotSamples } from "../../store/feed/selectors";
import {
  selectCh,
  selectClap,
  selectCrash,
  selectKick,
  selectOh,
  selectSnare,
  selectTom,
} from "../../store/looper/selectors";

export const Looper = () => {
  const kick = useSelector(selectKick);
  const snare = useSelector(selectSnare);
  const clap = useSelector(selectClap);
  const tom = useSelector(selectTom);
  const ch = useSelector(selectCh);
  const oh = useSelector(selectOh);
  const crash = useSelector(selectCrash);

  const dispatch = useDispatch();
  const oneShotSamples = useSelector(selectOneShotSamples);

  useEffect(() => {
    dispatch(fetchOneShotSamples);
  }, []);

  console.log("samples", oneShotSamples);

  return (
    <div
      id="looper"
      className="looper"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="row">
        {new Array(16).fill().map((_, idx) => (
          <Box2
            text={oneShotSamples ? oneShotSamples[0].name : ""}
            key={idx}
            audio={oneShotSamples ? oneShotSamples[0].url : ""}
            className="box"
          />
        ))}
      </div>
      <div className="row">
        {snare.map((sample, idx) => (
          <Box2
            text={sample ? sample.name : ""}
            key={idx}
            audio={sample ? sample.url : ""}
            className="box2"
          />
        ))}
      </div>
      <div className="row">
        {snare.map((sample, idx) => (
          <Box2
            text={sample ? sample.name : ""}
            key={idx}
            audio={sample ? sample.url : ""}
            className="box2"
          />
        ))}
      </div>
      <div className="row">
        {snare.map((sample, idx) => (
          <Box2
            text={sample ? sample.name : ""}
            key={idx}
            audio={sample ? sample.url : ""}
            className="box2"
          />
        ))}
      </div>
    </div>
  );
};
