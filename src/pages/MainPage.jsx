import { Channels } from "../components/Channels";
import { Analyser } from "../components/Analyser";
import { Box } from "../components/Channels";
import "../components/channel_rack.css";
import background from "../image/circle.jpeg";

const drums = [
  {
    name: "DRUMS",
    type: "drums",
    url: "https://audio.jukehost.co.uk/xqNwk2md2a1jsox3vFRWT2DY6zhh30Vf",
    tone: "",
    bpm: 120,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "DRUMS",
    type: "drums",
    url: "https://audio.jukehost.co.uk/xIsbWpYjQDfxLTFhQFvdidRNMaL6IFvo",
    tone: "",
    bpm: 120,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "DRUMS",
    type: "drums",
    url: "https://audio.jukehost.co.uk/lNcBjlvyb5TOPJxnHLK50GT2J74uWoc2",
    tone: "",
    bpm: 120,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "DRUMS",
    type: "drums",
    url: "https://audio.jukehost.co.uk/6PcUvlFYE2aGMxxifJDo05scSJs88Lx6",
    tone: "",
    bpm: 120,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const bass = [
  {
    name: "BASS",
    type: "bass",
    url: "https://audio.jukehost.co.uk/SQ0LAIEqdWGlQELeTxj8MMHvIzoXzg1l",
    tone: "",
    bpm: 120,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "BASS",
    type: "bass",
    url: "https://audio.jukehost.co.uk/u1e4lBnvptkaAMGkrD37UsKTtDkUSM7X",
    tone: "",
    bpm: 120,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "BASS",
    type: "bass",
    url: "https://audio.jukehost.co.uk/TLPX9CjVq9gcS3KtJhZAYPm2Wp900csI",
    tone: "",
    bpm: 120,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "BASS",
    type: "bass",
    url: "https://audio.jukehost.co.uk/SQ0LAIEqdWGlQELeTxj8MMHvIzoXzg1l",
    tone: "",
    bpm: 120,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const other = [
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
        <Channels drums={drums} bass={bass} />
      </div>
      <Analyser sounds={drums} />
    </div>
  );
};
