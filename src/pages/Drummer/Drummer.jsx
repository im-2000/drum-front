// import React, { useEffect } from "react";
import background from "../../image/drums.jpeg";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchOneShotSamples } from "../../store/feed/actions";
// import { selectOneShotSamples } from "../../store/feed/selectors";
import { Navigation } from "../../components/Navigation/NavigationHeader";
// import {
//   selectCh,
//   selectClap,
//   selectCrash,
//   selectKick,
//   selectOh,
//   selectSnare,
//   selectTom,
// } from "../../store/looper/selectors";
import { DrumMachine } from "./DrumMachine";
// import Loading from "../../components/Loading";
// import { selectToken } from "../../store/user/selectors";
// import { useNavigate } from "react-router-dom";

export const Drummer = () => {
  // const token = useSelector(selectToken);
  // const navigate = useNavigate();

  // if (token === null) {
  //   navigate("/");
  // }

  // const dispatch = useDispatch();
  // const oneShotSamples = useSelector(selectOneShotSamples);

  // useEffect(() => {
  //   dispatch(fetchOneShotSamples);
  // }, [dispatch]);

  // if (oneShotSamples.length === 0) {
  //   return <Loading />;
  // }
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div
        className="drummer"
        style={{
          backgroundImage: `url(${background})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <DrumMachine />
      </div>
    </div>
  );
};
