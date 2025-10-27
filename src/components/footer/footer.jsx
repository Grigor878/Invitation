import { useTranslation } from "react-i18next";
import logo from "../../assets/imgs/logo.png";
import styles from "./footer.module.scss";
import { Fade } from "../fade/fade";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Fade>
      <div className={styles.footer}>
        <p>{t("created")}</p>
        <img src={logo} alt="logo" />
      </div>
    </Fade>
  );
};
