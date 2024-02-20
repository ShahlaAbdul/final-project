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
              <NavLink to={"/newspanel"}>
                <li>
                  <span>News</span>
                  <i className="fa-solid fa-chevron-right"></i>
                </li>
              </NavLink>
              <li>
                <span>Services</span>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                <span>Faq</span>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                <span>Users</span>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminPanel;
