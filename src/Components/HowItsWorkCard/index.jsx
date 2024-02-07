import "./style.scss";
// eslint-disable-next-line react/prop-types
function HowItsWorkCard({ ptext, img }) {
  return (
    <div className="how_work_card">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <p>{ptext}</p>
    </div>
  );
}

export default HowItsWorkCard;
