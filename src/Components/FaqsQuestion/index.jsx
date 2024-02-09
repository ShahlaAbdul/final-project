import { useEffect, useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import TitleButton from "../TitleButton";
// eslint-disable-next-line react/prop-types
function FaqsQuestion({ showAll = false }) {
  const [faqData, setFaqData] = useState([]);
  const [show, setShow] = useState(null);

  const filteredData = showAll ? faqData : faqData.slice(0, faqData.length / 3);

  useEffect(() => {
    fetch("http://localhost:3200/faq")
      .then((res) => res.json())
      .then((data) => setFaqData(data));
  }, []);

  return (
    <section id="faqs">
      <div className="faqs">
        <div className="faqs_head">
          <h1> Suallar & Cavablar </h1>
        </div>
        <div className="faqs_content">
          {filteredData.map((x, index) => (
            <div className="faq_card" key={x.key}>
              <button
                className=" question"
                onClick={() => setShow(show === index ? null : index)}
              >
                <p>{x.question}</p>
                <i
                  className={`fa-solid ${
                    show === index ? " fa-chevron-down" : "fa-chevron-right"
                  } `}
                ></i>
              </button>
              {show === index && <p className="answer"> {x.answer} </p>}
            </div>
          ))}
        </div>
        <button className="faq_button">
          <NavLink className={"active"} to={"/faq"}>
            Daha Cox
          </NavLink>
        </button>
        <TitleButton text={"daha cox"}></TitleButton>
      </div>
      <div>
        {/* <img src="file:///C:/Users/user/Downloads/airplane.png" alt="" /> */}
      </div>
    </section>
  );
}

export default FaqsQuestion;
