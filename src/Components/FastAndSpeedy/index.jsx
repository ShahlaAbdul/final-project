// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./style.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

function FastAndSpeedy() {
  return (
    <section id="fast_and_speedy">
      <Swiper
        className="fast_and_speedy"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 4000 }}
        effect={"fade"}
      >
        <SwiperSlide
          className="slide"
          style={{
            backgroundImage:
              'linear-gradient(to right,  #040101c2, #040101c2), url("https://media.istockphoto.com/id/1295970440/photo/portrait-of-smiling-couple-renters-relocate-to-new-home.jpg?s=2048x2048&w=is&k=20&c=DEtn-g38SB-JW371Yy_yJXWlGmPxC3SZqEJhEAThanM=")',
          }}
        >
          <div className="fast_cargo">
            <div className="text_content">
              <h1>
                Sərfəli və <br /> Sürətli Kargo
              </h1>
              <p>
                Türkiyə və Amerikadan olan sifarişlərinizi Expargoya etibar edə
                bilərsiniz. Sərfəli qiymətlər və geniş xidmət şəbəkəsi ilə
                Expargo sizin xidmətinizdədir.
              </p>
              <div className="buttons">
                <Link to={"/user/register"}>
                  <button className="qeydiyyat">qeydiyyat</button>
                </Link>
                <Link to={"/user/login"}>
                  <button className="daxilol">Daxil ol</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="slide"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, #040101c2, #040101c2), url("https://media.istockphoto.com/id/1163329807/photo/delivery-young-man-standing-at-the-door-of-home-and-carrying-parcels-for-young-male-to-signing.jpg?s=2048x2048&w=is&k=20&c=TN2osBpUCFdfwsIZse4P_zTkq3HieG7xUx7k1u6-qo8=")',
          }}
        >
          <div className="fast_cargo">
            <div className="text_content">
              <h1 style={{ fontSize: "44px" }}>
                Başqalarının üstünlüyü <br /> bizim standartımızdır
              </h1>
              <p>
                Speedy-nin minimum standartlari ilə sürətli və etibarlı
                sifarişlər edin. bir Addimda qapinizda
              </p>
              <div className="buttons">
                <Link to={"/user/register"}>
                  <button className="qeydiyyat">qeydiyyat</button>
                </Link>
                <Link to={"/user/login"}>
                  <button className="daxilol">Daxil ol</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="slide"
          style={{
            backgroundImage:
              'linear-gradient(to bottom,  #040101c2, #040101c2), url("https://media.istockphoto.com/id/1447292368/photo/close-up-view-of-delivery-man-organizing-packages-before-handing-package-to-customers.jpg?s=2048x2048&w=is&k=20&c=7NajBt_UczvflAn1-B-feKpgONfVv1c-x6HRnjk5uIA=")',
          }}
        >
          <div className="fast_cargo">
            <div className="text_content">
              <h1 style={{ fontSize: "44px" }}>
                Türkiyədən <br /> Nə Lazımdır?
              </h1>
              <p>
                Türkiyənin bütün onlayn alış-veriş saytlarından ən sürətli
                sifariş üçün Dynamex-i seçin. Çox sadə, çox professional.
              </p>
              <div className="buttons">
                <Link to={"/user/register"}>
                  <button className="qeydiyyat">qeydiyyat</button>
                </Link>
                <Link to={"/user/login"}>
                  <button className="daxilol">Daxil ol</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default FastAndSpeedy;
