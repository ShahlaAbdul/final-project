import "./style.scss";
import TitleButton from "../TitleButton";

function WhoWeAre() {
  return (
    <section id="who_we_are">
      <div className="background"></div>
      <div className="who_we_are">
        <div className="head">
          <TitleButton text={"Biz Kimik?"}></TitleButton>
        </div>
        <div className="content">
          <div className="content_text">
            <h1>Biz Kimik?</h1>
            <p>
              Speedy.az sürətli poçtdaşıma və kuryer şirkətidir. Şirkət
              Beynəlxalq Hava Nəqliyyatı Asossiasiyasının (İATA) akredditə
              olunmuş yük agentidir. (İATA Accredited Cargo Agent)
            </p>
            <p>
              Speedy.az həmçinin FİATA-nın (Beynəlxalq Yük Ekspeditorları
              Assosasiyaları Federasiyası - International Federation of Freight
              Forwarders Associations) üzvüdür. Dünyanın 150 ölkəsinin milli
              ekspeditor birliklərini birləşdirən bu beynəlxalq təşkilat BMT-nin
              İqtisadi və Sosial Şurasında, Ticarət və İnkişaf üzrə
              Konfransında, BMT-nin Beynəlxalq Ticarət Hüquqları Komissiyasında
              məsləhətçi statusuna malikdir.
            </p>
            <p>
              Speedy.az kargo şirkəti müştərilərinə anbar, ünvanda təhvil vermə,
              havayolu karqo, kütləvi göndərişlərin və poçtdaşımalarının
              çatdırılması və qida maddələrinin daşınması xidmətlərini təklif
              edir.
            </p>
          </div>
          <div className="content_img">
            <img
              src="https://cargo.bold-themes.com/transport-company/wp-content/uploads/sites/2/2015/09/shutterstock_177975590-160x160.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
