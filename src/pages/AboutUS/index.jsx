import SectionHead from "../../Components/SectionHead";
import Statistic from "../../Components/Statistic";
import WhatWeDo from "../../Components/WhatWeDo";
import WhoWeAre from "../../Components/WhoWeAre";
import WhyUS from "../../Components/WhyUs";

function About() {
  return (
    <>
      <SectionHead
        bgImage={
          "https://cargo.bold-themes.com/delivery-express/wp-content/uploads/sites/3/2015/10/transport-dimmed.jpg"
        }
        ptext={"biz kimik?"}
        head={"Haqqımızda"}
      ></SectionHead>
      <WhoWeAre></WhoWeAre>
      <Statistic></Statistic>
      <WhyUS></WhyUS>
      <WhatWeDo></WhatWeDo>
    </>
  );
}

export default About;
