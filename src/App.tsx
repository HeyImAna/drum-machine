import "./scss/style.scss";
import DrumPad from "./components/DrumPad";
import audios from "./assets/audios.json";
import { useEffect, useState } from "react";

function App() {
  const [activePad, setActivePad] = useState("");
  useEffect(() => {
    document.addEventListener("keydown", (event: KeyboardEvent) => {
      audios.map((audio) =>
        audio.audioKey === event.key.toUpperCase()
          ? setActivePad(audio.title)
          : ""
      );
      (document.getElementById(event.key.toUpperCase()) as HTMLAudioElement)
        .play()
        .catch(console.error);
    });
  }, []);

  return (
    <div className="container" id="drum-machine">
      <h1 className="container__title">DRUM-MACHINE</h1>
      <div className="drum">
        <div className="drum__grid">
          {audios.map((audio) => (
            <DrumPad
              audio={audio}
              key={audio.audioKey}
              setActivePad={setActivePad}
            />
          ))}
        </div>
        <div className="drum__controls">
          <h3 id="display" className="display">
            {activePad}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
