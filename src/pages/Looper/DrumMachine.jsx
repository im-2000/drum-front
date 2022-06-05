import * as Tone from "tone";

export const DrumMachine = () => {
  const kick = new Tone.Player(
    "https://audio.jukehost.co.uk/JRVKYWCmgRxpKCI3ijAsm61z29599GmC"
  );
  const snare = Tone.Player(
    "https://audio.jukehost.co.uk/nA3BlaP27nLNre0gHihDWhDngWeg5HAk"
  );
  let index = 0;

  Tone.Transport.scheduleRepeat(repeat, "16n");
  Tone.Transport.start();

  function repeat() {
    let step = index % 8;
    let kickInputs = document.querySelector(
      `.kick input:nth-child(${step + 1})`
    );
    let snareInputs = document.querySelector(
      `.snare input:nth-child(${step + 1})`
    );
    if (kickInputs.checked) {
      kick.start();
    }
    if (snareInputs.checked) {
      snare.start();
    }
    index++;
  }
  return (
    <div>
      <input type="checkbox">KICK</input>
      <input type="checkbox">SNARE</input>
    </div>
  );
};
