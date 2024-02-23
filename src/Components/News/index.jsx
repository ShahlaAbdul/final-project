import { useEffect, useState } from "react";
import TitleButton from "../TitleButton";
import "./style.scss";
function News() {
  const [fetchNews, setFetchNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3200/api/news")
      .then((res) => res.json())
      .then((data) => setFetchNews(data));
  }, []);

  return (
    <section id="news">
      <div className="news">
        <div className="news_head">
          <TitleButton text={"Xəbərlər & Blog"} />
        </div>
        <div className="news_content">
          {fetchNews.map((x) => (
            <div className="news_card" key={x._id}>
              <ul>
                <img src={x.image} alt="" />

                <li className="head">{x.head}</li>
                <li>{x.date}</li>
                <li>
                  <p>{x.content.title.slice(0, 156)} </p>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
