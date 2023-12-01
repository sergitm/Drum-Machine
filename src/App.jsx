import { useState } from 'react'
import './App.css'
import DrumPad from './DrumPad'

const DrumPads = [
  {
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },{
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },{
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },{
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },{
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },{
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },{
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },{
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },{
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
]

function App() {

  const playAudio = (e) => {
    
    const clip = DrumPads.find(
      (drumPad) => drumPad.keyTrigger === e.key.toUpperCase()
    );

    if (!clip) return;
    const audio = document.getElementById(clip.keyTrigger);
    audio.play();
    audio.currentTime = 0;
    document.getElementById("display").innerHTML = clip.id;

    const drumPad = document.getElementById(clip.id);
    drumPad.classList.add("active");
    setTimeout(() => {
      drumPad.classList.remove("active");
    }, 100);
  }

  return (
    <>
      <div className='container' id="drum-machine" onKeyDown={playAudio}>
        <h1>Drum Machine</h1>
        <div className="drum">
          {DrumPads.map((drumPad) => (
            <DrumPad className="drum-pad"
              key={drumPad.keyTrigger}
              id={drumPad.id}
              url={drumPad.url}
              keyTrigger={drumPad.keyTrigger}
            />
          ))}
        </div>
        <div id="display"></div>
      </div>
    </>
  )
}

export default App
