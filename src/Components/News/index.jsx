import TitleButton from "../TitleButton";
import "./style.scss";
function News() {
  return (
    <section id="news">
      <div className="news">
        <div className="news_head">
          <TitleButton text={"Xəbərlər & Blog"} />
          <h1>Ən son xəbərlər</h1>
        </div>
      </div>
    </section>
  );
}

export default News;
