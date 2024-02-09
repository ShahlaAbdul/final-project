import { useEffect, useState } from "react";
import "./style.scss";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function NewsSlider() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3200/news")
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);

  return (
    <div className=" newsSlider">
      <h1>feywi</h1>
      <Swiper
        className="slider_content"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
      >
        {newsData.map((x) => (
          <SwiperSlide key={x.id}>
            <ul>
              <li>
                <img src={x.image} alt="" />
              </li>
              <li>
                <p>{x.content.title}</p>
              </li>
              <li>{x.date}</li>
            </ul>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NewsSlider;
