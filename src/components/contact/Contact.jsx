import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { RiTelegramLine } from "react-icons/ri";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_vr8wgbi",
      "template_xmfr8z8",
      form.current,
      "5b9IVhdon2wQ5D66-"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>{t("getInTouch")}</h5>
      <h2>{t("contactMe")}</h2>
      <div className="container ">
        <div className="contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>farshadshabani69@gmail.com</h5>
              <a
                href="mailto:farshadshabani69@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                {t("sendMassage")}
              </a>
            </article>

            <article className="contact__option">
              <RiTelegramLine className="contact__option-icon" />
              <h4>Telegram</h4>
              <h5>@Fz666</h5>
              <a
                href="https://telegram.me/Fz666"
                target="_blank"
                rel="noreferrer"
              >
                {t("sendMassage")}
              </a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+98 9350783233</h5>
              <a
                href="https://wa.me/+989350783233"
                target="_blank"
                rel="noreferrer"
              >
                {t("sendMassage")}
              </a>
            </article>
          </div>
          {/* END OF CONTACT OPTION */}
          <form ref={form} onSubmit={sendEmail} className="contact__options">
            <input
              type="text"
              name="name"
              placeholder={t("yourFullName")}
              required
              style={{ fontSize: 18 }}
            />
            <input
              type="email"
              name="email"
              placeholder={t("yourEmail")}
              required
              style={{ fontSize: 18 }}
            />
            <textarea
              name="massage"
              id=""
              cols="30"
              rows="7"
              placeholder={t("yourMassage")}
              required
              style={{ fontSize: 18 }}
            ></textarea>
            <button type="submit" className="btn btn-primary">
              {t("sendMassage")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
