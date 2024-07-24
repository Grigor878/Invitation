import { data } from "./data";
import { useTranslation } from "react-i18next";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from "react";
import styles from "./slide.module.scss";

export const Slide = () => {
  const { t } = useTranslation();

  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const formattedImages = data?.map(({ img }) => ({
    original: img,
    thumbnail: img,
  }));

  const openFullscreen = (index) => {
    setIndex(index);
    setOpen(true);
  };

  return (
    <div className={styles.slide}>
      {data?.map(({ id, img }, index) => {
        return (
          <img
            key={id}
            src={img}
            alt={`slide${id}`}
            onClick={() => openFullscreen(index)}
          />
        );
      })}

      {open && (
        <div className={styles.fullScreenSlider}>
          <ImageGallery
            lazyLoad={true}
            items={formattedImages}
            startIndex={index}
            showPlayButton={false}
            showFullscreenButton={true}
          />

          <button
            className={styles.fullScreenSlider_closeBtn}
            type="button"
            onClick={() => setOpen(false)}
          >
            {t("close")}
          </button>
        </div>
      )}
    </div>
  );
};
