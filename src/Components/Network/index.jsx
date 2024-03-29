import { NavLink } from "react-router-dom";
import "./style.scss";
import { useEffect, useState } from "react";
function Network() {
  const [serviceData, setServiceData] = useState([]);
  const [showFilial, setShowFilial] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3200/api/services/")
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);

  return (
    <section id="network">
      <div className="network">
        <div className="network_map"></div>
        <div className="network_filials">
          {serviceData.map((x, index) => (
            <div className="filial" key={x._id}>
              <div
                className="filial_name"
                onClick={() =>
                  setShowFilial(showFilial === index ? null : index)
                }
              >
                <span
                  style={{ color: `${showFilial === index ? "#df1119" : ""}` }}
                >
                  {x.filial}
                </span>
                <span>
                  <i
                    className={`fa-solid ${
                      showFilial === index
                        ? "fa-chevron-down"
                        : " fa-chevron-right"
                    }`}
                  ></i>
                </span>
              </div>
              {showFilial === index && (
                <div className="filial_content">
                  {/* name */}
                  <div className="name">
                    <NavLink
                      to={
                        "https://www.google.com/maps/place//data=!4m2!3m1!1s0x40307d1227607ab7:0x9a57b16206776b50?source=g.page.m.nr._"
                      }
                    >
                      <p className="name">Speedy {x.filial} filialı </p>
                    </NavLink>
                  </div>
                  {/* location */}
                  <NavLink
                    to={
                      "https://www.google.com/maps/place//data=!4m2!3m1!1s0x40307d1227607ab7:0x9a57b16206776b50?source=g.page.m.nr._"
                    }
                  >
                    <div className="location">
                      <i className="fa-solid fa-location-dot"></i>
                      <span>{x.location}</span>
                    </div>
                  </NavLink>
                  {/* work hours; */}
                  <div className="work_hours">
                    <span>İş saatları:</span>
                    <div className="weekly">
                      <span>Həftəiçi 5 gün:</span>
                      <span>{x.hours.weekly}</span>
                    </div>
                    <div className="weekend">
                      <span>Şənbə:</span>
                      <span>{x.hours.weekend}</span>
                    </div>
                    {/* elaqe nomresi */}
                    <div className="number">
                      <span>Əlaqə nömrəsi:</span>
                      <span>{x.call}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Network;
