import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { scrollToTop } from "../../utils/helpers";
import styles from "./scroll.module.scss";

export const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 700) {
        setIsVisible(true);
      } else {
        return setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BsFillArrowUpCircleFill
      className={`${
        isVisible ? styles.scrollVisible : styles.scroll
      }`}
      onClick={() => scrollToTop()}
    />
  );
};
