import LoginFormik from "../../Components/LoginFormik";
import SectionHead from "../../Components/SectionHead";
import "./style.scss";
import bgImage from "../../assets/Images/finalSectionBg2.jpg";


function LoginPage() {
  return (
    <>
      <SectionHead
        bgImage={bgImage}
        ptext={"Hesabiniza daxil olmaq isteyirsiniz?"}
        head={"Login Page"}
      />
      <LoginFormik />
    </>
  );
}

export default LoginPage;


