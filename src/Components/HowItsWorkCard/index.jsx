import "./style.scss";
// eslint-disable-next-line react/prop-types
function HowItsWorkCard({ icon, h1text, ptext, number }) {
  return (
    <div className="how_work_card">
      <div className="img">
        <i className={`${icon}  card_icon `}></i>
      </div>
      <h3>{h1text}</h3>
      <p>{ptext}</p>
      <span className="number">{number}</span>
    </div>
  );
}

export default HowItsWorkCard;
