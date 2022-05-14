import { ChannelRack } from "../components/ChannelRack";
import { Box } from "../components/ChannelRack";
import "../components/channel_rack.css";

// const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
// const sounds = [
//   "https://freesound.org/people/gis_sweden/sounds/633989/",
//   "https://freesound.org/people/LIM/sounds/46025/",
// ];
const sounds = [
  {
    key: "Q",
    sampleUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    key: "W",
    sampleUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    key: "E",
    sampleUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    key: "A",
    sampleUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    key: "S",
    sampleUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
  {
    key: "D",
    sampleUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
  },
  {
    key: "Z",
    sampleUrl: "https://freesound.org/people/LIM/sounds/46025/",
  },
  {
    key: "X",
    sampleUrl: "https://freesound.org/people/LIM/sounds/46025/",
  },
  {
    key: "C",
    sampleUrl: "https://freesound.org/people/LIM/sounds/46025/",
  },
];

export const MainPage = () => {
  return (
    <div id="drum-machine" className="container">
      <ChannelRack sounds={sounds} />
    </div>
  );
};
