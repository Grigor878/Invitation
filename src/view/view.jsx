import { useEffect } from "react";
import cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/header/header";
import { Main } from "../components/main/main";
import { Presence } from "../components/presence/presence";
import { Agenda } from "../components/agenda/agenda";
import { Attire } from "../components/attire/attire";
import { Footer } from "../components/footer/footer";
// import { Slide } from "../components/slide/slide";

const View = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const lng = cookies.get("i18next") || "hy";

    navigate(`/${lng}`, { replace: true });
  }, [navigate]);

  return (
    <>
      <div className="container">
        <Header />
        <Main />
        <Presence />
      </div>
      <Agenda />
      <div className="container">
        <Attire />
      </div>
      {/* <Slide /> */}
      <Footer />
    </>
  );
};

export default View;
