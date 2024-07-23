import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { timeUntil } from "../../utils/helpers";
import emailjs from "@emailjs/browser";
import main from "../../assets/imgs/main.png";
import styles from "./main.module.scss";
import { error, loading, success } from "../../actions/actions";

export const Main = () => {
  const { t } = useTranslation();
  const form = useRef();
  const targetDate = "September 14, 2024";

  const [fullname, setFullname] = useState("");
  const [guests, setGuests] = useState("");
  const [notes, setNotes] = useState("");

  const { VITE_PUBLIC_KEY, VITE_TEMPLATE_ID, VITE_SERVICE_ID } = import.meta
    .env;
  console.log(guests);
  const handleReject = () => {
    fullname && (setNotes(t("reject")), setGuests("0"), sendEmail());
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    loading(t("loading"));

    const data = form.current;

    if (data.get("guests") === "0") {
      data.delete("guests");
    }

    try {
      await emailjs.sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, data, {
        publicKey: VITE_PUBLIC_KEY,
      });
      success(t("success"));
    } catch (err) {
      error(`Error - ${err?.text}`);
      // error(`Status - ${err.status}`);
    } finally {
      setFullname("");
      setGuests("");
      setNotes("");
    }
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
          <form ref={form} className={styles.main_form} onSubmit={sendEmail}>
            <h4>{t("form")}</h4>

            <div className={styles.main_form_top}>
              <input
                name="full_name"
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder={t("label_one")}
                required={true}
              />
              <input
                name="guets"
                type="text"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                placeholder={t("label_two")}
                required={true}
              />
            </div>
            <textarea
              name="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t("label_three")}
            />

            <div className={styles.main_form_btns}>
              <button
                type="submit"
                onClick={handleReject}
                className="btnReject"
              >
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
