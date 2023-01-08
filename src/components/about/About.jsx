/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useTranslation } from "react-i18next";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/farshad22.jpg";
import "./about.css";

function About() {
  const { t } = useTranslation();

  return (
    <section id="about">
      <h5>{t("getToKnow")}</h5>
      <h2>{t("aboutMe")}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward />
              <h5>{t("experience")}</h5>
              <small>2+ {t("yearsWorking")}</small>
            </article>
            {/* <article className="about__card">
              <FiUsers />
              <h5>{t("clients")}</h5>
              <small>200+ Worldwide</small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary />
              <h5>{t("project")}</h5>
              <small>20+ {t("completed")}</small>
            </article>
          </div>
          <p>
            {t("1")}
            <br /> {t("2")}
            <br /> {t("3")}
            <br /> {t("4")}
            {/* I'm Farshad Shabani from Iran . I'm a front end specialist. My
            special skills are: <br />* Design Responsive Websites <br />* Use
            Technologies like React.js
            <br /> My goal is learn everyday and use it in my work. If you have
            any project I will be happy to discuss it with you */}
          </p>
          <a href="#contact" className="btn btn-primary">
            {t("lestTalk")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
