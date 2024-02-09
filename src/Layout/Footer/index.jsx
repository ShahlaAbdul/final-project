import Button1 from "../../Components/Button1";
import "./style.scss";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer_head">
          <div className="footer_left">
            <ul>
              <li>
                <h1>
                  Speedy <span>.</span>
                </h1>
              </li>
              <li>
                <h4>Expert MMC</h4>
                <p>Ağa Nemətulla küç. 49a</p>
                <p>Bakı, AZ1052, Nəriman Nərimanov</p>
              </li>
              <li className="weekly">
                <p>
                  <span>Həftəiçi:</span>
                  10:00-20:00
                </p>
                <p>
                  <span>Şənbə:</span> 10:00-16:00
                </p>
              </li>
              <li>
                <span className="number"> +994 (12) 210 00 85 </span>
                <p>For International inquiries:</p>
              </li>
            </ul>
          </div>
          <div className="footer_center">
            <p>Digər Linklər</p>
            <ul>
              <li>
                <span>Əsas səhifə </span>
                <span>Korporativ</span>
                <span>Necə işləyir?</span>
                <span>Xidmət şəbəkəsi</span>
                <span>Şərtlər & Qaydalar</span>
                <span>Gizlilik Siyasəti</span>
              </li>
              <li>
                <span>Tariflər </span>
                <span>Xəbərlər</span>
                <span>İstifadəçi paneli</span>
                <span>Mağazalar</span>
                <span>Əlaqə</span>
                <span>FAQ</span>
              </li>
            </ul>
          </div>
          <div className="footer_right">
            <div className="right_icons">
              <span>Bizi izləyin</span>
              <div className="icons">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-telegram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-tiktok"></i>
              </div>
            </div>
            <div className="right_app">
              <span>Mobil tətbiq</span>
              <div className="images">
                <img
                  src="https://www.expargo.com/assets/img/app-store-badge.svg"
                  alt=""
                />
                <img
                  src="https://www.expargo.com/assets/img/google-play-badge.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="left">
            <Button1 className={"btn"} text={"Daxil Ol"}></Button1>
            <Button1 text={"Qeydiyyat"}></Button1>
          </div>
          <div className="right">
            <p>© Copyright 2018-2024, Bütün hüquqlar qorunur.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
