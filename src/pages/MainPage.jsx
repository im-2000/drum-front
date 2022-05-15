import { Channels } from "../components/Channels";
import { Analyser } from "../components/Analyser";
import { Box } from "../components/Channels";
import "../components/channel_rack.css";
import background from "../image/circle.jpeg";

// const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
// const sounds = [
//   "https://freesound.org/people/gis_sweden/sounds/633989/",
//   "https://freesound.org/people/LIM/sounds/46025/",
// ];
const sounds = [
  {
    key: "KICK",
    sampleUrl: "https://reckhorn.com/media/music/7a/6f/e8/Test-2.mp3",
  },
  {
    key: "W",
    sampleUrl: "https://reckhorn.com/media/music/25/4d/02/Doppelbass-2.mp3",
  },
  {
    key: "E",
    sampleUrl: "https://reckhorn.com/media/music/08/bb/8a/Doppelbass-1.mp3",
  },
  {
    key: "A",
    sampleUrl:
      "https://mega.nz/fm/K9JnGaAb/dmth2_bass_loop_bouncid_120_Amin.wav",
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
    sampleUrl: "https://audio.jukehost.co.uk/ohd3zIpCy5Po0HJbavFhkVQpp25Sbbxe",
  },
  {
    key: "X",
    sampleUrl: "https://audio.jukehost.co.uk/jPHODKLYuKwoqRzfR40arobIVdCoSHfM",
  },
  {
    key: "C",
    sampleUrl: "https://audio.jukehost.co.uk/ZGqVgGkmKL7DRgLvetYfgfqnHLTfv8nq",
  },
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
];

export const MainPage = () => {
  return (
    <div>
      <div
        id="drum-machine"
        className="container"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Channels sounds={sounds} />
      </div>
      <Analyser sounds={sounds} />
    </div>
  );
};
