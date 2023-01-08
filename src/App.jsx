import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Recommendations from "./components/recommendations/Recommendations";
import Skills from "./components/skills/Skills";

function App() {
  const {t, i18n } = useTranslation();
  const [dir, setDir] = useState("en");
  //Creating a method to change the language onChange from select box
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
    setDir(languageValue);
  };
  return (
    <div dir={dir === "en" ? "ltr" : "rtl"}>
      <div className="multi-lang container">
        {/* Select box to change language */}
        <select className="custom-select" onChange={changeLanguageHandler}>
          <option value="en">English</option>
          <option value="fa">فارسی</option>
        </select>
      </div>
      <Nav />
      <Header />
      <About />
      <Skills />
      {/* <Services /> */}
      <Portfolio />
      <section id="contact">
      <h5>{t("getInTouch")}</h5>
      <h2>{t("contactMe")}</h2>
      <div className="container ">
        <div className="contact__container">
      <Recommendations />
      </div >
      </div >
      </section>
      <Contact />
      <footer >
        <Footer />
      </footer>
    </div>
  );
}

export default App;
