import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { languageData } from "./data";
import cookies from "js-cookie";
import useOutsideClick from "../../hooks/useOutsideClick";
import "./language.scss";

export const Language = () => {
  const { i18n } = useTranslation();

  const lngRef = useRef();
  const navigate = useNavigate();

  const [openLng, setOpenLng] = useState(false);
  const [selectedLng, setSelectedLng] = useState(
    cookies.get("lngSelected") || "Eng"
  );

  const handleOpenLng = () => {
    setOpenLng(!openLng);
  };

  const handleChangeLng = (code, name, path) => {
    setOpenLng(false);
    i18n.changeLanguage(code);
    setSelectedLng(name);
    cookies.set("i18next", code);
    navigate(path);
  };

  useOutsideClick(lngRef, openLng, setOpenLng);

  return (
    <div className="language" ref={lngRef}>
      <div className="language__choose" onClick={handleOpenLng}>
        <p>{selectedLng}</p>
      </div>

      <ul
        className={
          !openLng ? "language__dropdown" : "language__dropdown-active"
        }
      >
        {languageData
          .filter((el) => el.name !== selectedLng)
          .map(({ code, name, path }) => (
            <li key={code} onClick={() => handleChangeLng(code, name, path)}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};
