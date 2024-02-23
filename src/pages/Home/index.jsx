import { Helmet } from "react-helmet-async";
import "./style.scss";
import HowItsWork from "../../Components/HowItsWork";
import FaqsQuestion from "../../Components/FaqsQuestion";
import FastAndSpeedy from "../../Components/FastAndSpeedy";
import WhatWeDo from "../../Components/WhatWeDo";
import WhyUS from "../../Components/WhyUs";
// import Providing from "../../Components/Providing";
import Statistic from "../../Components/Statistic";
import News from "../../Components/News";

function Home() {
  return (
    <div>
      <Helmet>
        <title> Home</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <FastAndSpeedy></FastAndSpeedy>
      <WhatWeDo></WhatWeDo>

      <WhyUS></WhyUS>
      <HowItsWork />
      <Statistic />
      <FaqsQuestion></FaqsQuestion>
      <News></News>
    </div>
  );
}

export default Home;
