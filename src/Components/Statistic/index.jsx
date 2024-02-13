import "./style.scss";
import StatisticCard from "../StatisticCard";

function Statistic() {
  return (
    <section id="statistic">
      <div className="statistic">
        <StatisticCard
          icon={"fa-regular fa-paper-plane"}
          endValue={40}
          ptext={"illik təcrübə"}
        />

        <StatisticCard
          icon={"fa-solid fa-building-circle-check"}
          endValue={10}
          ptext={"əməkdaş"}
        />

        <StatisticCard
          icon={"fa-solid fa-dolly"}
          endValue={40}
          ptext={"filial"}
        />

        <StatisticCard
          icon={"fa-solid fa-users-gear"}
          endValue={"11"}
          stext={"k"}
          ptext={"işçi"}
        />
      </div>
    </section>
  );
}

export default Statistic;
