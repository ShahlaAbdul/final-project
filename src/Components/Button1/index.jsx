import "./style.scss";

// eslint-disable-next-line react/prop-types
const Button1 = ({ text }) => {
  return (
    <button className="button1">
      <span>{text}</span>
    </button>
  );
};

export default Button1;
