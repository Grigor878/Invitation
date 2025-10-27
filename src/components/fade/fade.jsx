import { useEffect, useRef, useState } from "react";
import styles from "./fade.module.scss";

export const Fade = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // optional: only trigger once
        }
      },
      { threshold: 0.1 } // trigger when 10% of the element is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles["fade-element"]} ${isVisible ? styles.active : ""}`}
    >
      {children}
    </div>
  );
};
