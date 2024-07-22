import { useState } from "react";
import { useTranslation } from "react-i18next";
import { timeUntil } from "../../utils/helpers";
import main from "../../assets/imgs/main.png";
import styles from "./main.module.scss";

export const Main = () => {
  const { t } = useTranslation();
  const targetDate = "September 14, 2024";

  const [fullname, setFullname] = useState("");
  const [guests, setGuests] = useState("");
  const [notes, setNotes] = useState("");

  const handleAccept = (e) => {
    e.preventDefault();
    alert(fullname);
    alert(guests);
    alert(notes);
  };

  return (
    <div className={styles.main}>
      <img className={styles.main_img} src={main} alt="flower" />

      <div className={styles.main_right}>
        <div className={styles.main_context}>
          <h2>{t("names")}</h2>
          <div className={styles.main_context_text}>
            <p>{t("subtitle_one")}</p>
            <p>{t("subtitle_two")}</p>
          </div>
        </div>

        <div className={styles.main_decision}>
          <form className={styles.main_form} onSubmit={handleAccept}>
            <h4>{t("form")}</h4>

            <div className={styles.main_form_top}>
              <input
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder={t("label_one")}
                required={true}
              />
              <input
                type="text"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                placeholder={t("label_two")}
                required={true}
              />
            </div>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t("label_three")}
            />

            <div className={styles.main_form_btns}>
              <button type="button" className="btnReject">
                {t("reject")}
              </button>
              <button type="submit" className="btnAccept">
                {t("accept")}
              </button>
            </div>
          </form>

          <div className={styles.main_form_remainder}>
            <p className="card">
              {t("days")} <span>{timeUntil(targetDate)?.days}</span>
            </p>
            <p className="card">
              {t("hours")} <span>{timeUntil(targetDate)?.hours}</span>
            </p>
            <p className="card">
              {t("minutes")} <span>{timeUntil(targetDate)?.minutes}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
