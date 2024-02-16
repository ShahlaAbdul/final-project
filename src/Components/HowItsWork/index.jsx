import HowItsWorkCard from "../HowItsWorkCard";
import TitleButton from "../TitleButton";
import "./style.scss";
function HowItsWork() {
  return (
    <section id="how_work">
      <div className="how_work">
        <div className="overlay"></div>
        <div className="car"></div>
        <div className="how_work_head">
          <TitleButton text={"necə İşləyir"} color={"#fff"} />
          <h1>3 Mərhələli Prosess</h1>
        </div>
        <div className="how_work_center">
          <HowItsWorkCard
            icon={"fa-solid fa-globe"}
            h1text={"Qeydiyyatdan keçin"}
            ptext={"Saytimizda qeydiyyat hissesinden qeydiyyatdan kecin"}
            number={"01"}
          ></HowItsWorkCard>
          <div className="arrow"></div>
          <HowItsWorkCard
            icon={"fa-solid fa-cart-flatbed "}
            h1text={"Daşınmanı seçin"}
            ptext={"Bağlamanızı xaricdəki ünvanımıza göndərin"}
            number={"02"}
          ></HowItsWorkCard>
          <div className="arrow"></div>

          <HowItsWorkCard
            icon={"fa-solid fa-square-check"}
            h1text={"Sifarişi təsdiq edin"}
            ptext={"Bağlamanızı sizə yaxın təhvil məntəqəsindən təhvil alın"}
            number={"03"}
          ></HowItsWorkCard>
        </div>
        {/* <div className="how_work_ rds">
          <HowItsWorkCard
            img={"https://www.expargo.com/assets/img/shopping-bags-icon.svg"}
            ptext={"Qeydiyyatdan keçin"}
          />
          <HowItsWorkCard
            img={"https://www.expargo.com/assets/img/warehouse-icon.svg"}
            ptext={"Bağlamanızı xaricdəki ünvanımıza göndərin"}
          />
          <HowItsWorkCard
            img={"https://www.expargo.com/assets/img/home-icon.svg"}
            ptext={"Bağlamanızı sizə yaxın təhvil məntəqəsindən təhvil alın"}
          />
        </div>{" "} */}
      </div>
    </section>
  );
}

export default HowItsWork;
