import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/landing.jpg";
import IMG2 from "../../assets/shoe-shopping.jpg";
import IMG3 from "../../assets/shop.jpg";
import IMG4 from "../../assets/personal-web2.jpg";

import { useTranslation } from "react-i18next";

function Portfolio() {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      image: IMG1,
      title: t("landingPage"),
      github: "https://github.com/Farshadsh69/landing",
      demo: "https://farshadsh69.github.io/landing/",
    },
    {
      id: 2,
      image: IMG2,
      title: t("shoeShopping"),
      github: "https://github.com/Farshadsh69/shoe-shopping",
      demo: "https://farshadsh69.github.io/shoe-shopping/",
    },
    {
      id: 3,
      image: IMG3,
      title: t("shop"),
      github: "https://github.com/Farshadsh69/shop",
      demo: "https://farshadsh69.github.io/shop/",
    },
    {
      id: 4,
      image: IMG4,
      title: t("personalWeb2"),
      github: "https://github.com/Farshadsh69/personal-web2",
      demo: "https://farshadsh69.github.io/personal-web2/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>{t("myRecentWork")}</h5>
      <h2>{t("portfolio")}</h2>
      <div className="container portfolio__container">
        {data.map((item) => (
          <article key={item.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={item.image} alt="" />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={item.github}
                className="btn "
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={item.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
