import React, { useState, useEffect, useRef } from "react";
import background from "../../image/drums.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { Box2 } from "../../components/Box2";
import { fetchOneShotSamples } from "../../store/feed/actions";
import { selectOneShotSamples } from "../../store/feed/selectors";
import { Navigation } from "../../components/Navigation";
import {
  selectCh,
  selectClap,
  selectCrash,
  selectKick,
  selectOh,
  selectSnare,
  selectTom,
} from "../../store/looper/selectors";
import Loading from "../../components/Loading";
import { DrumMachine } from "./DrumMachine";

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

  console.log("oneShotSamples", oneShotSamples);

  if (oneShotSamples.length === 0) {
    return <Loading />;
  }
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div>
        <Navigation />
      </div>
      <div id="looper" className="looper">
        {/* <div>
          <DrumMachine />
        </div> */}
        <div className="row">
          <p>KICK</p>
          &nbsp; &nbsp;
          {new Array(16).fill().map((_, idx) => (
            <Box2
              // text={oneShotSamples[0].name}
              key={idx}
              audio={oneShotSamples[0].url}
            />
          ))}
        </div>
        <div className="row">
          <p>SNARE</p>
          &nbsp; &nbsp;
          {new Array(16).fill().map((_, idx) => (
            <Box2
              // text={oneShotSamples[1].name}
              key={idx}
              audio={oneShotSamples[1].url}
            />
          ))}
        </div>
        <div className="row">
          <p>CLAP</p>
          &nbsp; &nbsp;
          {new Array(16).fill().map((_, idx) => (
            <Box2
              // text={oneShotSamples[2].name}
              key={idx}
              audio={oneShotSamples[2].url}
            />
          ))}
        </div>
        <div className="row">
          <p>TOM</p>
          &nbsp; &nbsp;
          {new Array(16).fill().map((_, idx) => (
            <Box2
              // text={oneShotSamples[3].name}
              key={idx}
              audio={oneShotSamples[3].url}
            />
          ))}
        </div>
        <div className="row">
          <p>CH</p>
          &nbsp; &nbsp;
          {new Array(16).fill().map((_, idx) => (
            <Box2
              // text={oneShotSamples[4].name}
              key={idx}
              audio={oneShotSamples[4].url}
            />
          ))}
        </div>
        <div className="row">
          <p>OH</p>
          &nbsp; &nbsp;
          {new Array(16).fill().map((_, idx) => (
            <Box2
              // text={oneShotSamples[5].name}
              key={idx}
              audio={oneShotSamples[5].url}
            />
          ))}
        </div>
        <div className="row">
          <p>CRASH</p>
          &nbsp; &nbsp;
          {new Array(16).fill().map((_, idx) => (
            <Box2
              // text={oneShotSamples[6].name}
              key={idx}
              audio={oneShotSamples[6].url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
