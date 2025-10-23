import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { languages } from "../../utils/constants";
import cookies from "js-cookie";
import useOutsideClick from "../../hooks/useOutsideClick";
import Flag from "react-world-flags";
import "./language.scss";

export const Language = () => {
  const navigate = useNavigate();

  const { i18n } = useTranslation();

  const lngRef = useRef();

  const [openLng, setOpenLng] = useState(false);
  const selected = languages.find(({ code }) => code === i18n?.language);

  const handleOpenLng = () => {
    setOpenLng(!openLng);
  };

  const handleChangeLng = (code) => {
    setOpenLng(false);
    i18n.changeLanguage(code);
    cookies.set("i18next", code);
    navigate(`/${code}`);
  };

  useOutsideClick(lngRef, openLng, setOpenLng);

  return (
    <div className="language" ref={lngRef}>
      <div className="language__choose" onClick={handleOpenLng} title="Change Language">
        <p>{selected?.name}</p>
        <Flag
          code={selected?.path.slice(1).toUpperCase()}
          width="25"
          height="25"
          style={{ border: "1px solid #00000033" }}
          alt="lng_glag"
        />
      </div>

      <ul
        className={
          !openLng ? "language__dropdown" : "language__dropdown-active"
        }
      >
        {languages
          .filter((el) => el.code !== selected?.code)
          .map(({ code, name }) => (
            <li key={code} onClick={() => handleChangeLng(code)}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};
