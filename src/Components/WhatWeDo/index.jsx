import TitleButton from "../TitleButton";
import WhatWeDoCard from "../WhatWeDoCard";
import "./style.scss";
function WhatWeDo() {
  return (
    <section id="what_we_do">
      <div className="what_we_do">
        <div className="what_we_do_head">
          <TitleButton text={" Nə Təklif Edirik"} />
          <h1>Koorporativ xidmətlərimiz</h1>
        </div>
          <div className="what_we_do_cards">
            <WhatWeDoCard
              image={
                "https://html.kodesolution.com/2023/transtex-html/images/resource/service2-3.jpg"
              }
              icon={"fa-solid fa-bus"}
              h2text={"Bus Fright"}
            ></WhatWeDoCard>
            <WhatWeDoCard
              image={
                "https://html.kodesolution.com/2023/transtex-html/images/resource/service2-2.jpg"
              }
              icon={"fa-solid fa-plane"}
              h2text={"AirPlane Fright"}
            ></WhatWeDoCard>
            <WhatWeDoCard
              image={
                "https://html.kodesolution.com/2023/transtex-html/images/resource/service2-1.jpg"
              }
              icon={"fa-solid fa-ship"}
              h2text={"Sea Fright"}
            ></WhatWeDoCard>
          </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
