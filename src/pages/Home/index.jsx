import { Helmet } from "react-helmet-async";
import "./style.scss";
import HowItsWork from "../../Components/HowItsWork";
import Advantages from "../../Components/Advantages";
import FaqsQuestion from "../../Components/FaqsQuestion";
import FastAndSpeedy from "../../Components/FastAndSpeedy";
import WhatWeDo from "../../Components/WhatWeDo";
import WhyUS from "../../Components/WhyUs";
import Providing from "../../Components/Providing";
import Statistic from "../../Components/Statistic";
import RequestQuote from "../../Components/RequestQuote";
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
      <Providing />
      <WhyUS></WhyUS>
      <HowItsWork />
      <Statistic />
      <FaqsQuestion></FaqsQuestion>
      <News></News>

      <RequestQuote />
      <Advantages />
    </div>
  );
}

export default Home;
