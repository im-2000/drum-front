import React from "react";
import { Howl } from "howler";
import { BsSoundwave } from "react-icons/bs";

export const Player = () => {
  const soundSrc =
    "https://audio.jukehost.co.uk/sl2CmI41M0JuJVV5H1gB2MbzH7D1fHHH";
  const callMySound = () => {
    const sound = new Howl({
      src: ["https://audio.jukehost.co.uk/sl2CmI41M0JuJVV5H1gB2MbzH7D1fHHH"]
      html5: true,
    });
    BsSoundwave.play();
  };
  return <div>
      <div onClick={() => callMySound(soundSrc)}>Click me to play the sound</div>
  </div>;
};
