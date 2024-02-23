import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import { useEffect, useState } from "react";
import Button1 from "../../Components/Button1";
function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 60);
    window.onscroll = handleScroll;
    return () => (window.onscroll = null);
  }, []);

  return (
    <header className={isSticky ? "sticky" : ""}>
      <div className="container">
        <div className="header">
          <div className="header_content">
            <div className="header_loc">
              <Link
                to={
                  "https://www.google.com/maps/place/Abdurrahim+Bey+Hagverdiyev+St,+Baku/@40.3802525,49.8123208,17z/data=!3m1!4b1!4m6!3m5!1s0x40307d930d95c5f3:0xd0ef2ae32f7e4aa3!8m2!3d40.3802484!4d49.8148957!16s%2Fg%2F1vc6bwd2?entry=ttu"
                }
              >
                <div className="location">
                  <i className="fa-solid fa-location-dot"></i>
                  <p>Ə. Haqverdiyev küç. 50</p>
                </div>
              </Link>
              <div className="call">
                <i className="fa-solid fa-phone"></i>
                <p>*5555</p>
              </div>
            </div>
            <div className="header_icons">
              <Link to={"https://www.instagram.com/"}>
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link to={"https://www.facebook.com/"}>
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link to={"https://www.youtube.com/"}>
                <i className="fa-brands fa-youtube"></i>
              </Link>
              <Link to={"https://www.telegram.com/"}>
                <i className="fa-brands fa-telegram"></i>
              </Link>
            </div>
          </div>
        </div>
        <nav>
          <div className="navbar">
            <div className="logo">Speedy</div>
            <div className="pages">
              <ul>
                <li>
                  <NavLink to={"/"}>Home </NavLink>
                </li>
                <li>
                  <NavLink to={"/calculator"}>Kalkulyator</NavLink>
                </li>
                <li>
                  <NavLink to={"/services"}>Services</NavLink>
                </li>
                <li>
                  <NavLink to={"/news"}>News</NavLink>
                </li>
                <li>
                  <NavLink to={"/faq"}>Faq</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
              </ul>
              <i className="fa-solid fa-bars sidebar"></i>
              <Link to={"/user/login"}>
                <Button1 className={"btn"} text={"LOGIN"}></Button1>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
