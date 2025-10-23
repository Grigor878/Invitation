import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import logo from "../../assets/imgs/1.jpg";

export const HelmetAsync = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language; 
  const name = "Allset.am";
  const url = window.location.href;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{t("names")}</title>

      {/* Open Graph / Facebook  */}
      <meta property="og:image" content={logo} />
      <meta property="og:image:secure_url" content={logo} />

      <meta property="og:title" content={t("names")} />
      <meta property="og:description" content={t("subtitle_two")} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={name.toLowerCase()} />

      {/* Twitter */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="website" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={t("names")} />
      <meta name="twitter:description" content={t("subtitle_two")} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
};
