import { useTranslation } from "react-i18next";
import { agenda } from "../../utils/constants";
import styles from "./agenda.module.scss";
import { Fade } from "../fade/fade";

export const Agenda = () => {
  const { t } = useTranslation();

  return (
    <Fade>
      <div className={styles.agenda}>
        <div className="container">
          <h2 className="title">{t("agenda")}</h2>

          <div className={styles.agenda_block}>
            <ul className={styles.agenda_list}>
              {agenda?.map(({ id, icon, title, time, place }) => {
                return (
                  <li key={id} className={styles.agenda_link}>
                    <img src={icon} alt="title" />
                    <div className={styles.agenda_link_circle}></div>
                    <div className={styles.agenda_link_context}>
                      <p>{t(title)}</p>
                      <span>{t(time)}</span>
                      <p>{t(place)}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Fade>
  );
};
