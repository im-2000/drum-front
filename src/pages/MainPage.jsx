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
    sample:
      "https://freesound.orghttps://cdn.freesound.org/previews/46/46025_159012-lq.mp3",
  },
  {
    key: "W",
    sample: "https://freesound.org/people/LIM/sounds/46025/",
  },
  {
    key: "E",
    sample: "https://freesound.org/people/LIM/sounds/46025/",
  },
  {
    key: "A",
    sample: "https://freesound.org/people/LIM/sounds/46025/",
  },
  {
    key: "S",
    sample: "https://freesound.org/people/LIM/sounds/46025/",
  },
  {
    key: "D",
    sample: "https://freesound.org/people/LIM/sounds/46025/",
  },
  {
    key: "Z",
    sample: "https://freesound.org/people/LIM/sounds/46025/",
  },
  {
    key: "X",
    sample: "https://freesound.org/people/LIM/sounds/46025/",
  },
  {
    key: "C",
    sample: "https://freesound.org/people/LIM/sounds/46025/",
  },
];

export const MainPage = () => {
  return (
    <div id="drum-machine" className="container">
      <ChannelRack sounds={sounds} />
    </div>
  );
};
