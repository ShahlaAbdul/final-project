import CalculatorForm from "../../Components/CalculatorForm";
import SectionHead from "../../Components/SectionHead";
import "./style.scss";
import bgImage from "../../assets/Images/finalSectionBg2.jpg";
function Calculator() {
  return (
    <>
      <SectionHead
        bgImage={bgImage}
        ptext={"cargo odenisini hesablamaq isetyirsiniz?"}
        head={"Calculator"}
      />
      <CalculatorForm />
    </>
  );
}

export default Calculator;
