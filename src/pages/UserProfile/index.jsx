import SectionHead from "../../Components/SectionHead";
import "./style.scss";
import bgImage from "../../assets/Images/finalSectionBg2.jpg";
function UserProfile() {
  return (
    <div>
      <SectionHead
        bgImage={bgImage}
        ptext={"Şəxsi məlumatlarınız"}
        head={"User PRofile"}
      />
      <section id="user_profile">
        <div className="user_profile">
          <div className="profile">
            <div className="user_icon">
              <i className="fa-regular fa-user"></i>
            </div>
            <h1>name</h1>
          </div>
          <div className="dashboard">
            <div className="dashboard_part">id</div>
            <div className="dashboard_part">
              <p>Şəxsi məlumatlar</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="dashboard_part">
              <p>Şifrə dəyişikliyi</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="dashboard_part">
              <p>Müraciətlər</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="dashboard_part">
              <p>Müraciətlər</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="dashboard_part">
              <p>Ödənişlər</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="dashboard_part">
              <p>Xidmət tarixçəsi</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="dashboard_part">
              <p>Bildiriş abunəlikləri</p>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="dashboard_part">
              <p>Çıxış et</p>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
