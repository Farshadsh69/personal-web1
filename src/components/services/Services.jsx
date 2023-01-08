import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();

  return (
    <section id="services">
      <h5>{t("whatIOffer")}</h5>
      <h2>{t("services")}</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
}

export default Services;
