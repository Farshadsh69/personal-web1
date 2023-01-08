import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills">
      <h5>{t("whatSkillsIHave")}</h5>
      <h2>{t("mySkills")}</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{t("frontend")}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">{t("intermediate")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">{t("intermediate")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Material Ui</h4>
                <small className="text-light">{t("experienced")}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">{t("intermediate")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">{t("experienced")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">{t("experienced")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">{t("intermediate")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>RestFul APi</h4>
                <small className="text-light">{t("intermediate")}</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Graphql</h4>
                <small className="text-light">{t("intermediate")}</small>
              </div>
            </article>
          </div>
        </div>
        {/* <div className="experience__backend">
          <div className="experience__frontend">
            <h3>Backend Developer</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Material Ui</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Skills;
