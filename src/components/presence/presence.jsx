import { useTranslation } from "react-i18next";
import styles from "./presence.module.scss";

export const Presence = () => {
  const { t } = useTranslation();

  return <div className={styles.presence}>
    <h2 className="title">{t("presence")}</h2>
  </div>;
};
