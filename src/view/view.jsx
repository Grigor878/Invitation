import { useEffect } from "react";
import cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/header/header";
import { Main } from "../components/main/main";
import { Presence } from "../components/presence/presence";

const View = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const lng = cookies.get("i18next") || "en";
    lng === "am" ? navigate("/arm") : navigate("/eng");
  }, [navigate]);

  return (
    <div className="container">
      <Header />
      <Main />
      <Presence />
    </div>
  );
};

export default View;
