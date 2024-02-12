import { Helmet } from "react-helmet-async";
import "./style.scss";
import HowItsWork from "../../Components/HowItsWork";
import Advantages from "../../Components/Advantages";
import FaqsQuestion from "../../Components/FaqsQuestion";
import NewsSlider from "../../Components/NewsSlider";
import FastAndSpeedy from "../../Components/FastAndSpeedy";
import WhatWeDo from "../../Components/WhatWeDo";
import WhyUS from "../../Components/WhyUs";
import Providing from "../../Components/Providing";

function Home() {
  return (
    <div>
      <Helmet>
        <title> Home</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <FastAndSpeedy></FastAndSpeedy>
      <WhatWeDo></WhatWeDo>
      <Providing />
      <WhyUS></WhyUS>
      <HowItsWork />
      <Advantages />
      <FaqsQuestion></FaqsQuestion>

      <NewsSlider></NewsSlider>
    </div>
  );
}

export default Home;
