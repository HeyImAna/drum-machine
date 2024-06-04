import { AudioType } from "../types";

interface AppProps {
  audio: AudioType;
  setActivePad: React.Dispatch<React.SetStateAction<string>>;
}

const DrumPad = ({ audio, setActivePad }: AppProps) => {
  const handleClickSound = (audio: AudioType) => {
    (document.getElementById(audio.audioKey) as HTMLAudioElement)
      .play()
      .catch(console.error);
    setActivePad(audio.title);
  };

  return (
    <button
      className="drum-pad"
      id={`sound${audio.audioKey}`}
      onClick={() => handleClickSound(audio)}
    >
      <audio src={audio.url} id={audio.audioKey} className="clip"></audio>
      {audio.audioKey}
    </button>
  );
};

export default DrumPad;
