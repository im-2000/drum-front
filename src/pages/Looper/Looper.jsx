import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box2 } from "../../components/Box2";
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
    <div id="display" className="looper">
      <div>
        <p
          style={{
            color: "red",
            fontSize: 20,
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
          }}
        >
          KICK
        </p>
        {kick.map((sample, idx) => (
          <Box2
            text={sample ? sample.name : ""}
            key={idx}
            audio={sample ? sample.url : ""}
            className="box"
          />
        ))}
      </div>
      <div>
        <p
          style={{
            color: "#42f5c8",
            fontSize: 20,
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
          }}
        >
          SNARE
        </p>
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
