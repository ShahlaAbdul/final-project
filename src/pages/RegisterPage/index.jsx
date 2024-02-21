import SectionHead from '../../Components/SectionHead';
import "./style.scss";
import bgImage from '../../assets/Images/finalSectionBg2.jpg';
import RegisterFormik from '../../Components/RegisterFormik';
function RegisterPage() {
  return (
    <div>
          <SectionHead ptext={"Hesabbınız yoxdur?"} bgImage={bgImage} head={"Sign Up Page"} />
          <RegisterFormik/>
    </div>
  );
}

export default RegisterPage;
