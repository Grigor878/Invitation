import { useTranslation } from "react-i18next";
import { Language } from "../language/language";
import styles from "./header.module.scss";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.header_context}>
        <h2>{t("sub_title")}</h2>
        <p>{t("wedding_date")}</p>
      </div>
      <div className={styles.header_lng}>
        <Language />
      </div>
    </header>
  );
};
