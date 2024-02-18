import FaqsQuestion from "../../Components/FaqsQuestion";
import SectionHead from "../../Components/SectionHead";
import "./style.scss";
function Faqs() {
  return (
    <div>
      <SectionHead
        ptext={"Hər hansı sualınız var?"}
        bgImage={
          "https://cargo.bold-themes.com/delivery-express/wp-content/uploads/sites/3/2015/09/Delivery-Express.jpg"
        }
        head={" FAQ's"}
      ></SectionHead>
      <FaqsQuestion showAll={true} />
    </div>
  );
}

export default Faqs;
