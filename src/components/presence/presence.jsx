import { useTranslation } from "react-i18next";
import { data } from "./data";
import { Link } from "react-router-dom";
import styles from "./presence.module.scss";
import { Fade } from "../fade/fade";

export const Presence = () => {
  const { t } = useTranslation();

  return (
    <Fade>
      <div className={styles.presence}>
        <h2 className="title">{t("presence")}</h2>

        <ul className={styles.presence_list}>
          {data?.map(
            ({ id, name, img, text1, text2, map, redirect, phones }) => {
              return (
                <li key={id} className={styles.presence_link}>
                  <img src={img} alt={name} />
                  <p> {t(name)}</p>
                  <div className={styles.presence_block}>
                    {/* <span style={{ width: "100px" }}>{t(text1)}</span> */}
                    <span>{t(text1)}</span>
                    <span>{t(text2)}</span>
                    <Link
                      title={`Google Maps - ${t(map)}`}
                      to={redirect}
                      target="_blank"
                      className={styles.presence_block_link}
                    >
                      {t(map)}
                    </Link>
                    <ul>
                      {phones?.map(({ who, tel }) => {
                        return (
                          <li key={who}>
                            <a href={`tel:${tel}`}>{tel}</a>
                            <span>{t(who)}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </Fade>
  );
};
