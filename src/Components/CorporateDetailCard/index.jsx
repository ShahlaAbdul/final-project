import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.scss";

function CorporateDetailCard() {
  const [corporateDetail, setCorporateDetail] = useState(null);
  const [corporateData, setCorporateData] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:3200/api/corporate/" + id)
      .then((res) => res.json())
      .then((data) => {
        setCorporateDetail(data);
      });
  }, [id]);

  useEffect(() => {
    fetch("http://localhost:3200/api/corporate/")
      .then((res) => res.json())
      .then((data) => {
        setCorporateData(data);
      });
  }, []);

  return (
    <section id="corporate_detail">
      <div className="corporate_detail">
        {/* <div className="go_home">
          <Link to={"/"}>
            <i className="fa-solid fa-house"></i>
            <span> Home</span>
          </Link>
        </div> */}
        {/* caetgories */}
        <div className="detail_right">
          <div className="detail_category">
            {corporateData.map((x) => (
              <div className="category" key={x._id}>
                <p>{x.category}</p>
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </div>
            ))}
          </div>
          <div className="detail_center_cards">
            {corporateData.map((x) => (
              <div key={x._id}>
                <ul className="detail_center_card">
                  <li>
                    {" "}
                    <img src={x.image} alt="" />
                  </li>
                  <li className="text">
                    <span>{x.head}</span>
                    <p>{x.title.slice(0, 140)}</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {corporateDetail && (
          <div className="detail_card">
            <div className="detail_img">
              <img src={corporateDetail.image} alt="" />
            </div>
            <div className="detail_text">
              <h2>{corporateDetail.head}</h2>
              <p>{corporateDetail.title.slice(0, 400)}</p>
              <br />
              <p>{corporateDetail.title.slice(0, 400)}</p>
            </div>

            <div className="service_center">
              <h1>Məlumat Mərkəzi</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                est, itaque possimus iure ab eos omnis fugit maxime pariatur
                veritatis, a placeat reprehenderit soluta, eum laboriosam
                tempore hic eveniet debitis.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CorporateDetailCard;
