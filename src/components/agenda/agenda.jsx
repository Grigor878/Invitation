import { useTranslation } from "react-i18next";
import { data } from "./data";
import styles from "./agenda.module.scss";

export const Agenda = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.agenda}>
      <div className="container">
        <h2 className="title">{t("agenda")}</h2>

        <div  className={styles.agenda_block}>
          <ul className={styles.agenda_list}>
            {data?.map(({ id, icon, title, time, place }) => {
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
  );
};
