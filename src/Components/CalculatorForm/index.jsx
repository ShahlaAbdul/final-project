import React, { useEffect, useState } from "react";
import "./style.scss";
import Currency from "../CurrencyConverter";

function CalculatorForm() {
  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");
  const [country, setCountry] = useState("Turkey");
  const [cost, setCost] = useState("");
  const [count, setCount] = useState("");
  const [currency, setCurrency] = useState(1);
  const [filial, setFilial] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    calculateCost();
  }
  function calculateCost() {
    let calculatedCost = 0;
    const priceTurkey = 4.5;
    const priceUsa = 9.0;

    if (country === "Turkey") {
      if (length <= 100) {
        calculatedCost = weight * priceTurkey * count;
      } else {
        calculatedCost =
          (weight * priceTurkey + (length / 1000) * priceTurkey) * count;
      }
    } else if (country === "USA") {
      if (length <= 100) {
        calculatedCost = weight * priceUsa * count;
      } else {
        calculatedCost =
          (weight * priceUsa + (length / 1000) * priceUsa) * count;
      }
    }
    setCost((calculatedCost * currency).toFixed(2));
  }
  useEffect(() => {
    fetch("http://localhost:3200/api/services")
      .then((res) => res.json())
      .then((data) => setFilial(data));
  }, []);

  return (
    <section id="calculator">
      <div className="calculator">
        <div className="calculator_form">
          <h1>kalkulyator</h1>
          <form onSubmit={handleSubmit}>
            <div className="selections">
              <select>
                {filial.map((x) => (
                  <option key={x._id} value={x.filial}>
                    {x.filial}
                  </option>
                ))}
              </select>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option value="Turkey">Turkey</option>
                <option value="USA">USA</option>
              </select>
            </div>
            <div>
              <label htmlFor="weight">Weight (kg): </label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                placeholder="çəki:kq"
              />
            </div>
            <div>
              <label htmlFor="count">count: </label>
              <input
                type="number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                required
                placeholder="baglama sayi"
              />
            </div>
            <div>
              <label htmlFor="length">Length (cm): </label>
              <input
                type="number"
                id="length"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                required
                placeholder="həcm:sm"
              />
            </div>
            <div>
              <label htmlFor="country">Country: </label>
            </div>
            <div className="total_submit">
              <div className="total">
                <p>Cəm:</p>
                <span> ${cost}</span>
              </div>
              <button type="submit" className="button1">
                Hesabla
              </button>
            </div>
          </form>
        </div>
        <div className="currency">
          <h1>Məzənnə</h1>
          <form action="" className="currency_form">
            <div className="converte">
              <input type="text" name="" placeholder="0.0" />
              <select name="" id="">
                <option value="">USD</option>
                <option value="">AZN</option>
                <option value="">TRY</option>
              </select>
            </div>
            <div className="converte">
              <input type="text" name="" placeholder="0.0" />
              <select name="" id="">
                <option value="">USD</option>
                <option value="">AZN</option>
                <option value="">TRY</option>
              </select>
            </div>
            <p>gunun mezennesine uygun hesablanr</p>
          </form>
          <div className="daily_currency">
            <ul>
              <li>
                <div className="img">
                  <img
                    src="https://limak.az/new_front/assets/img/icons/tr-circle.svg"
                    alt=""
                  />
                  <span>1</span>
                </div>
                <span>TRY</span>
              </li>
              <li>
                <div className="img">
                  <img
                    src="https://limak.az/new_front/assets/img/icons/az-circle.svg"
                    alt=""
                  />
                  <span>1</span>
                </div>
                <span>TRY</span>
              </li>
              <li>
                <div className="img">
                  <img
                    src="https://limak.az/new_front/assets/img/icons/usa-circle.svg"
                    alt=""
                  />
                  <span>1</span>
                </div>
                <span>AZN</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalculatorForm;
