import "./style.scss";
// eslint-disable-next-line react/prop-types
function SectionHead({ bgImage, ptext, head }) {
  return (
    <section
      id="section_head"
      style={{
        backgroundImage: ` url(${bgImage})`,
      }}
    >
      <div className="section_head">
        <p>{ptext}</p>
        <span></span>
        <h1>{head}</h1>
      </div>
    </section>
  );
}

export default SectionHead;
