import { Helmet } from "react-helmet-async";
import "./style.scss";
import FastCargo from "../../Components/SerfeliVeSuretli";
import HowItsWork from "../../Components/HowItsWork";
import Advantages from "../../Components/Advantages";

function Home() {
  return (
    <div>
      <Helmet>
        <title> Home</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <FastCargo></FastCargo>
          <HowItsWork />
          <Advantages/>
    </div>
  );
}

export default Home;
