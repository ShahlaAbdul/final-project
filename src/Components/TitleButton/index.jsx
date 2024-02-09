import "./style.scss"
// eslint-disable-next-line react/prop-types
function TitleButton({text}) {
  return (
    <div>
          <button className='title_button'>{ text}</button>
    </div>
  );
}

export default TitleButton;
