import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { timeUntil } from "../../utils/helpers";
import emailjs from "@emailjs/browser";
import main from "../../assets/imgs/1.jpg";
import styles from "./main.module.scss";
import { error, loading, success } from "../../actions/actions";
import { Fade } from "../fade/fade";

export const Main = () => {
  const { t } = useTranslation();
  const form = useRef();
  const targetDate = "November 3, 2025";

  const [formData, setFormData] = useState({
    fullname: "",
    guests: "",
    notes: "",
  });

  const { VITE_PUBLIC_KEY, VITE_TEMPLATE_ID, VITE_SERVICE_ID } = import.meta
    .env;

  const handleReject = () => {
    if (formData.fullname) {
      setFormData((prev) => ({
        ...prev,
        notes: t("reject"),
        guests: "0",
      }));
      sendEmail();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    loading(t("loading"));

    try {
      await emailjs.sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, form.current, {
        publicKey: VITE_PUBLIC_KEY,
      });
      success(t("success"));
    } catch (err) {
      error(`Error - ${err?.text}`);
    } finally {
      setFormData({ fullname: "", guests: "", notes: "" });
    }
  };

  return (
    <Fade>
      <div className={styles.main}>
        <img className={styles.main_img} src={main} alt="flower" />

        <div className={styles.main_right}>
          <div className={styles.main_context}>
            <h2>{t("names")}</h2>
            <div className={styles.main_context_text}>
              <p>{t("subtitle_one")}</p>
              <p>{t("subtitle_two")}</p>
              {/* <p>{t("subtitle_three")}</p> */}
            </div>
          </div>

          <div className={styles.main_decision}>
            <form ref={form} className={styles.main_form} onSubmit={sendEmail}>
              <h4>{t("form")}</h4>

              <div className={styles.main_form_top}>
                <input
                  name="fullname"
                  type="text"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder={t("label_one")}
                  required={true}
                />
                <input
                  name="guests"
                  type="text"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder={t("label_two")}
                  required={true}
                />
              </div>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
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
    </Fade>
  );
};
