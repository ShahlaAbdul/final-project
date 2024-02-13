import { useEffect, useState } from "react";
import "./style.scss";

// eslint-disable-next-line react/prop-types
function StatisticCard({ icon, endValue, ptext, stext }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (count < endValue) {
        setCount(count + 1);
      }
    }, 100);
    return () => clearInterval(timeout);
  }, [count, endValue]);

  return (
    <div>
      <div className="counter_card">
        <i className={`${icon} card_icon`}></i>
        <h1>
          {" "}
          {count}
          {stext}+
        </h1>
        <p>{ptext}</p>
      </div>
    </div>
  );
}

export default StatisticCard;
