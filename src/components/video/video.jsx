import { useRef, useEffect } from "react";
import styles from "./video.module.scss";
import video from "../../assets/video.mp4";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Fade } from "../fade/fade";

export const Video = () => {
  const videoRef = useRef(null);
  const mobile = useMediaQuery(`(max-width: 768px)`);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = vid.play();
            if (playPromise !== undefined) {
              playPromise.catch((error) => {
                console.log(
                  error ||
                    "Autoplay with sound blocked. User interaction required."
                );
              });
            }
          } else {
            vid.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(vid);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Fade>
      <div className={styles.video}>
        <div className={!mobile && "container"}>
          <video ref={videoRef} src={video} loop playsInline muted />
        </div>
      </div>
    </Fade>
  );
};
