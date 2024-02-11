import TitleButton from "../TitleButton";
import "./style.scss";

function WhyUS() {
  return (
    <section id="why_us">
      <div className="why_us">
        <div className="why_us_left">
          <div className="why_us_image1">
            <img
              src="https://html.kodesolution.com/2023/transtex-html/images/resource/choose3-1.jpg"
              alt=""
            />
          </div>
          <div className="why_us_images2">
            <div className="img2">
              <img
                src="https://html.kodesolution.com/2023/transtex-html/images/resource/choose3-2.jpg"
                alt=""
              />
            </div>
            <div className="img3">
              <i className="fa-solid fa-plane-departure"></i>
              <h3>Proffesional Sirket Catdirilmasi</h3>
            </div>
          </div>
        </div>
        <div className="why_us_right">
          <TitleButton text={"Niyə Biz"}></TitleButton>
          <h1>Bütün Növ Kargoların Anında Çatdırılması</h1>

          <div className="experience_container">
            <div className=" experience">
              <h1>20</h1>
            </div>
            <div className="payment_solution">
              <div className="payment">
                <i className="fa-solid fa-hand-holding-dollar"></i>
                <div className="content">
                  <h3>Sərfəli ödəniş</h3>
                  <p>kargolarınızın fiziki çəkiyə uygun olaraq hesablanması </p>
                </div>
              </div>
              <div className="payment">
                <i className="fa-solid fa-trailer"></i>
                <div>
                  <h3>Sürətli çatdırılma</h3>
                  <p>kargolarının anında və zərər görmədən çatdırılması</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUS;
