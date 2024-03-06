import SectionHead from "../../Components/SectionHead";
import "./style.scss";
import bgImage from "../../assets/Images/finalSectionBg2.jpg";
import { NavLink } from "react-router-dom";

function AdminPanel() {
  return (
    <div>
      <SectionHead
        ptext={"Bura Admin Panel Səhifəsidir"}
        bgImage={bgImage}
        head={"AdminPanel"}
      />
      <section id="adminpanel">
        <div className="admin_panel">
          <div className="select">
            <ul>
              <NavLink to={"/news_panel"}>
                <li>
                  <span>News</span>
                  <i className="fa-solid fa-chevron-right"></i>
                </li>
              </NavLink>
              <NavLink to={"/services_panel"}>
                <li>
                  <span>Services</span>
                  <i className="fa-solid fa-chevron-right"></i>
                </li>
              </NavLink>
              <NavLink to={"/faq_panel"}>
                <li>
                  <span>Faq</span>
                  <i className="fa-solid fa-chevron-right"></i>
                </li>
              </NavLink>
              <NavLink to={"/services_panel"}>
                <li>
                  <span>Users</span>
                  <i className="fa-solid fa-chevron-right"></i>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminPanel;
