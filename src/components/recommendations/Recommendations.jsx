import React from "react";
import AVTR1 from "../../assets/maedeh.png";
import AVTR2 from "../../assets/amir.png";

import "./recommendations.css";
import { useTranslation } from "react-i18next";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    id: 2,
    avatar: AVTR2,
    name: "AmirMohammad Rezaie",
    review:
      "Farshad is an incredibly capable Front-End Developer. I had the pleasure of working with him on a Barg Holding. I always know Farshad like a patient teacher and real friend.",
  },
  {
    id: 1,
    avatar: AVTR1,
    name: "Maedeh Javadi",
    review:
      " فرشاد یک فرد بسیار سخت کوش ، کمک کننده و همکار خیلی خوبی هست و علاقه مند به پیشرفت و یادگیری بیشتر، بسیار پر انرژی و باحاله و روحیه تیمو همیشه بالا نگه میداره",
  },
];
function Recommendations() {
  const { t } = useTranslation();

  return (
    <section id="recommendations">
      <h5>{t("recommendations")}</h5>
      <h2>{t("received")}</h2>
      <div className="container recommendations__container" >
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((item) => (
          <SwiperSlide className="recommendation" key={item.id}>
            <div className="client__avatar">
              <img src={item.avatar} alt="Avatar One" />
            </div>
            <h5 className="client__name">{item.name}</h5>
            <small className="client__review">{item.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
}

export default Recommendations;
