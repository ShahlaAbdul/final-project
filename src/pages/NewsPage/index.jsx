import News from "../../Components/News";
import SectionHead from "../../Components/SectionHead";
import bgImage from "../../assets/images/finalSectionBg2.jpg";
function NewsPage() {
  return (
    <>
      <SectionHead
        bgImage={bgImage}
        ptext={"Ən son Xəbərlər"}
        head={" Xəbərlər & Blog"}
      />
      <News />
    </>
  );
}

export default NewsPage;
