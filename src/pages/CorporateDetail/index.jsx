import "./style.scss";
import { Helmet } from "react-helmet-async";
import SectionHead from "../../Components/SectionHead";
import bgImage from "../../assets/Images/finalSectionBg2.jpg";
import CorporateDetailCard from "../../Components/CorporateDetailCard";

function CorporateDetail() {


  return (
    <>
      <Helmet>
        <title>Corporate Detail</title>
        <link
          rel="icon"
          href="https://html.kodesolution.com/2023/transtex-html/images/icons/preloader.png"
        />
      </Helmet>
      <SectionHead
        bgImage={bgImage}
        ptext={"Korpoorativ xidmetlerimiz"}
        head={"CORPORATE"}
      />
      <CorporateDetailCard/>

    </>
  );
}

export default CorporateDetail;
