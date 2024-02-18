import { NavLink } from "react-router-dom";
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
              <div className="location">
                <i className="fa-solid fa-location-dot"></i>
                <p>Ə. Haqverdiyev küç. 50</p>
              </div>
              <div className="call">
                <i className="fa-solid fa-phone"></i>
                <p>*5555</p>
              </div>
            </div>
            <div className="header_icons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-telegram"></i>
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
                  <NavLink to={"/kalkulyator"}>Kalkulyator</NavLink>
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
              <Button1 className={"btn"} text={"LOGIN"}></Button1>
            </div>
          </div>
        </nav>
      </div>
    </header>
    // <header className={isSticky ? "sticky" : ""}>
    //   <nav>
    //     <div className="header_container">
    //       <div className="header">
    //         <div className="header_left">
    //           <div className="location">
    //             <i className="fa-solid fa-location-dot"></i>
    //             <p>Əbdürrəhim bəy Haqverdiyev küçəsi 50</p>
    //           </div>
    //           <div className="time">
    //             <i className="fa-regular fa-clock"></i>
    //             <p>Bazar Ertəsi-Şənbə</p>
    //           </div>
    //           <div className="call">
    //             <i className="fa-solid fa-phone"></i>
    //             <p>*5555</p>
    //           </div>
    //         </div>
    //         <div className="">
    //           <div className="header_right">
    //             <i className="fa-brands fa-facebook"></i>
    //             <i className="fa-brands fa-instagram"></i>
    //             <i className="fa-brands fa-youtube"></i>
    //             <i className="fa-brands fa-telegram"></i>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="navbar">
    //       <div className="logo">
    //         <h3>
    //           <NavLink to={"/"}>Speedy</NavLink>
    //         </h3>
    //         <span>.</span>
    //       </div>
    //       <div className="navbar_pages">
    //         <ul>
    //           <li>
    //             <NavLink to={"/"}>Əsas Səhifə </NavLink>
    //           </li>
    //           <li>
    //             <NavLink to={"/services"}>Xidmətlər</NavLink>
    //           </li>
    //           <li>
    //             <NavLink to={"/tarifler"}>Tariflər</NavLink>
    //           </li>
    //           <li>
    //             <NavLink to={"/shop"}>Mağazalar</NavLink>
    //           </li>
    //           <li>
    //             <NavLink to={"/news"}>Kalkulyator</NavLink>
    //           </li>
    //           <li>
    //             <NavLink to={"/contact-us"}>Əlaqə</NavLink>
    //           </li>
    //           <li>
    //             <NavLink to={"/faq"}>FAQ</NavLink>
    //           </li>
    //           <li>Sifariş et</li>
    //         </ul>
    //       </div>
    //       <div className="language">
    //         <select name="" id="">
    //           <option value="">Ru</option>
    //           <option value="">Az</option>
    //         </select>
    //       </div>
    //       <div className="login">
    //         <NavLink to={"/login"}>Daxil Ol</NavLink>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  );
}

export default Navbar;
