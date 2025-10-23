import { useEffect, useRef, useState } from "react";
import music from "../../assets/music.mp3";
import { FaPlay, FaPause, FaMusic } from "react-icons/fa";
import styles from "./music.module.scss";

export const Music = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Playback failed:", err));
    }
  };

  // Optional: auto-play on load if allowed
  useEffect(() => {
    const playMusic = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.log("Autoplay blocked, user interaction required", err);
      }
    };
    playMusic();
  }, []);

  return (
    <div className={styles.music}>
      <button
        type="button"
        onClick={handleToggle}
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <audio ref={audioRef} src={music} loop />
      <span>
        <FaMusic />
      </span>
    </div>
  );
};
