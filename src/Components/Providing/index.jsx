import { NavLink } from "react-router-dom";
import "./style.scss";

function Providing() {
  return (
    <section id="providing">
      <div className="overlay"></div>
      <div className="providing">
        <h1>
          Hamıya ən yüksək keyfiyyətli kuryer & loqistika xidmətləri təmin
          edirik
        </h1>

        <div className="watch_video">
          <span>Watch Video</span>
          <img
            src="https://html.kodesolution.com/2023/transtex-html/images/icons/icon-arrow-2.png"
            alt=""
          />
          <div className="watch">
            {" "}
            <NavLink to={"https://www.youtube.com/watch?v=38ELm5ybh70"}>
              <i className="fa-solid fa-play"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Providing;
