import { useEffect, useState } from "react";
import TitleButton from "../TitleButton";
import "./style.scss";
function News() {
  const [fetchNews, setFetchNews] = useState([]);
  const [hoverDirection, setHoverDirection] = useState("right");

  useEffect(() => {
    fetch("http://localhost:3200/news")
      .then((res) => res.json())
      .then((data) => setFetchNews(data));
  }, []);

  const handleHover = (event) =>
    setHoverDirection(
      event.clientX - event.currentTarget.getBoundingClientRect().left >
        event.currentTarget.offsetWidth / 2
        ? "right"
        : "left"
    );

  return (
    <section id="news">
      <div className="news">
        <div className="news_head">
          <TitleButton text={"Xəbərlər & Blog"} />
        </div>
        <div className="news_content">
          {fetchNews.map((x) => (
            <div
              className="news_card"
              key={x._id}
              style={{ backgroundImage: `url(${x.image})` }}
              onMouseOver={handleHover}
            >
              <div className={`news_card_overlay ${hoverDirection}`}>
                <i className="fas fa-search"></i>
              </div>
              <ul>
                {/* <li>{x.head}</li>
                <li>{x.date}</li>
                <li>{x.content.ending}</li> */}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
