import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { languages } from "../../utils/constants";
import cookies from "js-cookie";
import useOutsideClick from "../../hooks/useOutsideClick";

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
      <div className="language__choose" onClick={handleOpenLng}>
        <p>{selected?.name}</p>
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
