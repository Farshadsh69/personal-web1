import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/farshad11.png";
import HeaderSocials from "./HeaderSocials";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <div className="container header__container">
        <h5>{t("hello im")}</h5>
        <h1>{t("name")}</h1>
        <h5 className="text-light">{t("frontend")} </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          {t("scrollDown")}
        </a>
      </div>
    </header>
  );
}

export default Header;
