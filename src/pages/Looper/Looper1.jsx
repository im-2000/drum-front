// import Tone from "tone";

// export const Looper1 = () => {
//   const sequencer = () => {
//     const kick = new Tone.Player("./OneShot/Kick.wav").toDestination();
//     const snare = new Tone.Player("./OneShot/Snare.wav").toDestination();
//     let index = 0;

//     Tone.Transport.scheduleRepeat(repeat, "8n");
//     Tone.Transport.start();

//     function repeat() {
//       let step = index % 8;
//       let selectedsfx = document.querySelector(
//         `.top input:nth-child(${step + 1})`
//       );
//       let selectedsfx2 = document.querySelector(
//         `.bottom input:nth-child(${step + 1})`
//       );

//       if (selectedsfx.checked) {
//         kick.start();
//       }
//       if (selectedsfx2.checked) {
//         snare.start();
//       }
//       index++;
//     }
//   };

//   sequencer();

//   return (
//     <div className="drums">
//       <div class="kick">
//         <input type="checkbox"></input>
//         <input type="checkbox"></input>
//         <input type="checkbox"></input>
//         <input type="checkbox"></input>
//         <input type="checkbox"></input>
//         <input type="checkbox"></input>
//         <input type="checkbox"></input>
//         <input type="checkbox"></input>
//       </div>
//       <div class="snare">
//         <input type="checkbox"></input>
//         <input type="checkbox"></input>
//         <input type="checkbox"></input>
//         <input type="checkbox"></input>
//         <input type="checkbox"></input>
//         <input type="checkbox"></input>
//         <input type="checkbox"></input>
//         <input type="checkbox"></input>
//       </div>
//     </div>
//   );
// };
