import "./style.scss"
// eslint-disable-next-line react/prop-types
function TitleButton({text, color}) {
  return (
    <div>
      <button className='title_button' style={{ color:`${color}`}}>{ text}</button>
    </div>
  );
}

export default TitleButton;
