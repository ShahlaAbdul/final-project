import { useEffect, useState } from "react";
import TitleButton from "../TitleButton";
import WhatWeDoCard from "../WhatWeDoCard";
import "./style.scss";
import CorporateDetail from "../../pages/CorporateDetail";
function WhatWeDo() {
  const [corporateData, setCorporateData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3200/api/corporate")
      .then((res) => res.json())
      .then((data) => setCorporateData(data));
  }, []);

  return (
    <section id="what_we_do">
      <div className="what_we_do">
        <div className="what_we_do_head">
          <TitleButton text={" Nə Təklif Edirik"} />
          <h1>Koorporativ xidmətlərimiz</h1>
        </div>
        <div className="what_we_do_cards">
          {corporateData.map((item) => (
            <div className="card" key={item._id}>
              <WhatWeDoCard
                key={item._id}
                itemId={item._id}
                image={item.image}
                icon={"fa-solid fa-bus"}
                h2text={item.head}
                ptext={item.title.slice(0, 200)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
