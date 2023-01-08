/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { TfiSkype } from "react-icons/tfi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import { useTranslation } from "react-i18next";
import Logo3 from "../../assets/logo3.png";
import Logo4 from "../../assets/logo4.png";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <a href="#" className="footer__logo">
        {/* <img src={Logo2} alt="logo" style={{ width: 200, }} /> */}
        <img
          src={Logo3}
          alt="logo"
          style={{ "&:hover": { transition: 5 } }}
          onMouseOver={(e) => (e.currentTarget.src = Logo4)}
          onMouseOut={(e) => (e.currentTarget.src = Logo3)}
        />
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">{t("home")}</a>
        </li>
        <li>
          <a href="#about">{t("about")}</a>
        </li>
        <li>
          <a href="#experience">{t("experience")}</a>
        </li>
        {/* <li>
          <a href="#services">{t("services")}</a>
        </li> */}
        <li>
          <a href="#portfolio">{t("portfolio")}</a>
        </li>
        <li>
          <a href="#testimonials">{t("recommendations")}</a>
        </li>
        <li>
          <a href="#contact">{t("contact")}</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.facebook.com/farshad.shabani.3"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://github.com/Farshadsh69"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/farshad-shabani-672b32214/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Farshad. {t("logo")}.</small>
      </div>
    </footer>
  );
}

export default Footer;
