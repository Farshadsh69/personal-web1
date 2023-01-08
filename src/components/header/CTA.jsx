import React from "react";
import "./header.css";
import CV from "../../assets/portfolio6.jpg";
import { useTranslation } from "react-i18next";

function CTA() {
  const { t } = useTranslation();

  return (
    <div className="cta">
      <a href={CV} download className="btn">
        {t("downloadResume")}
      </a>
      <a href="#contact" className="btn btn-primary">
        {t("lestTalk")}
      </a>
    </div>
  );
}

export default CTA;
