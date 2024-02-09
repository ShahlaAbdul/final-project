import { NavLink } from "react-router-dom";
import "./style.scss";
function Navbar() {
  return (
    <div>
      <header>
        <div className="header">
          <div className="header_left">
            <div className="location">
              <i className="fa-solid fa-location-dot"></i>
              <p>Əbdürrəhim bəy Haqverdiyev küçəsi 50</p>
            </div>
            <div className="time">
              <i className="fa-regular fa-clock"></i>
              <p>Bazar Ertəsi-Şənbə</p>
            </div>
            <div className="call">
              <i className="fa-solid fa-phone"></i>
              <p>*5555</p>
            </div>
          </div>
          <div className="">
            <div className="header_right">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>
        </div>
      </header>
      <nav>
        <div className="navbar">
          <div className="logo">
            <p>
              <NavLink to={"/"}>Speedy</NavLink>
            </p>
            <span>.</span>
          </div>
          <div className="navbar_pages">
            <ul>
              <li>
                <NavLink to={"/"}>Əsas Səhifə </NavLink>
              </li>
              <li>
                <NavLink to={"/services"}>Xidmətlər</NavLink>
              </li>
              <li>
                <NavLink to={"/tarifler"}>Tariflər</NavLink>
              </li>
              <li>
                <NavLink to={"/shop"}>Mağazalar</NavLink>
              </li>
              <li>
                <NavLink to={"/news"}>Kalkulyator</NavLink>
              </li>
              <li>
                <NavLink to={"/contact-us"}>Əlaqə</NavLink>
              </li>
              <li>
                <NavLink to={"/faq"}>FAQ</NavLink>
              </li>
              <li>Sifariş et</li>
            </ul>
          </div>
          <div className="language">
            <select name="" id="">
              <option value="">Ru</option>
              <option value="">Az</option>
            </select>
          </div>
          <div className="login">
            <NavLink to={"/login"}>Daxil Ol</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
