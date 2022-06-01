import React, { useEffect, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { selectAllSamples, selectAllStyles } from "../../store/feed/selectors";
import { fetchAllSamples, fetchAllStyles } from "../../store/feed/actions";
import { Box } from "../Box";
import { Form } from "react-bootstrap";
import { addSample } from "../../store/channels/slice";
import { CgAdd } from "react-icons/cg";
import { Channels } from "../Channels";
import { clearSamples } from "../../store/channels/slice";

export const Browser = () => {
  const dispatch = useDispatch();
  const samplesState = useSelector(selectAllSamples);
  const stylesState = useSelector(selectAllStyles);
  const [style, setStyle] = useState(0);
  const [type, setType] = useState("");
  const [filteredSamples, setFilteredSamples] = useState(samplesState);

  // const [{ isDragging }, drag] = useDrag(() => ({
  //   type: "sample",
  //   item: { id: filteredSamples.sample.id },
  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // }));

  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "sample",
    drop: (item) => addSampleToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addSampleToBoard = (id) => {
    console.log(id);
  };

  console.log("samples", filteredSamples);

  // const dragItem = useRef();
  // const dragOverItem = useRef();

  // const dragStart = (e, position) => {
  //   dragItem.current = position;
  //   console.log(e.target.innerHTML);
  // };

  // const dragEnter = (e, position) => {
  //   dragOverItem.current = position;
  //   console.log(e.target.innerHTML);
  // };

  // const drop = (e) => {
  //   const copyListItems = [...filteredSamples];
  //   const dragItemContent = copyListItems[dragItem.current];
  //   copyListItems.splice(dragItem.current, 1);
  //   copyListItems.splice(dragOverItem.current, 0, dragItemContent);
  //   dragItem.current = null;
  //   dragOverItem.current = null;
  //   setFilteredSamples(copyListItems);
  // };

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
        <div>
          <button onClick={() => dispatch(clearSamples(null))}>
            Clear channels
          </button>
          &nbsp; &nbsp; &nbsp;
          <button>Upload sample</button>
        </div>
        {/* <h2 style={{ color: "#42f5c8" }}>Browser</h2> */}
        <div className="filters">
          <div>
            <p style={{ color: "#42f5c8" }}>Style</p>
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
          &nbsp; &nbsp; &nbsp;
          <div
            Style={
              {
                // display: "flex",
                // justifyContent: "row",
              }
            }
          >
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
              <div

              // style={{ border: isDragging ? "5px solid pink" : "0px" }}
              // onDragStart={(e) => dragStart(e, idx)}
              // onDragEnter={(e) => dragEnter(e, idx)}
              // onDragEnd={drop}
              // onDragOver={(e) => e.preventDefault()}
              // key={idx}
              // draggable
              >
                {/* {sample} */}
                <Box
                  ref={drop}
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
