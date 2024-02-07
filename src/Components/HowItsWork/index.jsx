import HowItsWorkCard from "../HowItsWorkCard";
import "./style.scss";
function HowItsWork() {
  return (
    <section id="how_work">
      <div className="how_work">
        <div className="how_work_head">
          <h1>Necə işləyir?</h1>
        </div>
        <div className="how_work_cards">
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
        </div>
      </div>
    </section>
  );
}

export default HowItsWork;
