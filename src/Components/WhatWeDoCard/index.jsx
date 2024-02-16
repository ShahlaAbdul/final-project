import "./style.scss";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function WhatWeDoCard({ image, icon, h2text, ptext }) {
  return (
    <div>
      <div className="">
        <div className="what_we_do_card">
          <div className="card_image">
            <img src={image} alt="" />
            <div className="overlay"></div>
          </div>
          <div className="card_info">
            <div className="info_content">
              <div className="icon">
                <i className={icon}></i>
              </div>
              <h2>{h2text}</h2>
              <p>{ptext}</p>
            </div>
            <div className="card_learn">
              <NavLink to={"/"}>
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDoCard;
