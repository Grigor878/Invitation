import { useTranslation } from "react-i18next";
import cloths from "../../assets/imgs/cloths.png";
import colors from "../../assets/imgs/colors.png";
import styles from "./attire.module.scss";

export const Attire = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.attire}>
      <h2 className="title">{t("attire")}</h2>

      <div className={styles.attire_row}>
        <div className={styles.attire_col}>
          <img src={cloths} alt="cloths" />
          <p>{t("cloths")}</p>
        </div>
        <div className={styles.attire_col}>
          <img src={colors} alt="colors" />
          <p>{t("colors")}</p>
        </div>
      </div>
    </div>
  );
};
