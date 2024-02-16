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
            h2text={"Quru yolu nəqliyyatı"}
            ptext={
              "Bizə müraciət edərək Speedy-nin çoxsaylı avtomobil şəbəkəsindən yararlana, yüklərinizin idxal və ixrac əməlyatlarınızı icra edə bilərsiniz."
            }
          ></WhatWeDoCard>
          <WhatWeDoCard
            image={
              "https://html.kodesolution.com/2023/transtex-html/images/resource/service2-2.jpg"
            }
            icon={"fa-solid fa-plane"}
            h2text={"Hava nəqliyyatı "}
            ptext={
              "Speedy-nin bu xidmətindən istifadə edərək dünyanın hər hansı bir hava limanından Azərbaycana idxal və ixrac əməlyatlarını həyata keçirə bilərsiniz."
            }
          ></WhatWeDoCard>
          <WhatWeDoCard
            image={
              "https://html.kodesolution.com/2023/transtex-html/images/resource/service2-1.jpg"
            }
            icon={"fa-solid fa-ship"}
            h2text={"Dəniz nəqliyyatı "}
            ptext={
              "Speedy ilə əməkdaşlıq edərək dünyanın hər hansı bir limanı ilə idxal ixrac əməliyyatlarınızı həyata keçirə bilərsiniz."
            }
          ></WhatWeDoCard>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
