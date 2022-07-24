import "./channel_rack.css";
import React, { useEffect } from "react";
import background from "../image/circle.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getDrumSamplesState } from "../store/feed/selectors";
import { fetchDrumSamples } from "../store/feed/thunks";
import { Link } from "react-router-dom";
import { selectDrums } from "../store/channels/selectors";
import { toggleDrums } from "../store/channels/slice"

export const Channels = (props) => {
const dispatch = useDispatch();
const samplesState = useSelector(getDrumSamplesState);

useEffect(() => {
dispatch(fetchDrumSamples);
}, []);

return (
<div
id="display"
className="display"
// style={{ backgroundImage: `url(${background})` }} >
{/_ <ul>
{samplesState.samples.map((sample) => (
<li key={sample.id}>{sample.name}</li>
))}
</ul> _/}
{props.drums.map((drum, idx) => (
<Box text={drum.name} key={idx} audio={drum.url} />
))}
</div>
);
};

class Box extends React.Component {
const dispatch = useDispatch()
const drums = useSelector(selectDrums)

constructor(props) {
super(props);

    this.audio = React.createRef();

}

componentDidMount() {
this.audio.current.addEventListener("ended", (e) => {
const parent = e.target.parentNode;
parent.classList.remove("active");
});
}

playSound = () => {
this.audio.current.play();

    const parent = this.audio.current.parentNode;
    parent.classList.add("active");

};

render() {
const { text, audio } = this.props;

    return (
      <div className="box" onClick={this.playSound}>
        {text}
        <audio ref={this.audio} src={audio} className="clip" id={text} />
      </div>
    );

}
}

document.addEventListener("keydown", (e) => {
const id = e.key.toUpperCase();
const audio = document.getElementById(id);

if (audio) {
audio.pause();
const parent = audio.parentNode;
parent.classList.add("active");
audio.play();
}
});
