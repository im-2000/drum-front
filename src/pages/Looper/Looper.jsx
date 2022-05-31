import React, { useState, useEffect, useRef } from "react";
import background from "../../image/drums.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { Box2 } from "../../components/Box2";
import { Browser } from "../../components/Browser/Browser";
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
        {kick.map((sample, idx) => (
          <Box2
            text={sample ? sample.name : ""}
            key={idx}
            audio={sample ? sample.url : ""}
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
