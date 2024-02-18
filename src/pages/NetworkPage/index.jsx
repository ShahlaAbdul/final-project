import Map from "../../Components/Map";
import Network from "../../Components/Network";
import SectionHead from "../../Components/SectionHead";

function NetworkPage() {
  return (
    <>
      <div className="network_page">
        <SectionHead
          ptext={"Bağlamamızı necə götürək?"}
          head={"Filiallarımız"}
          bgImage={
            "https://cargo.bold-themes.com/delivery-express/wp-content/uploads/sites/3/2015/09/Druga-Pozadina.jpg"
          }
        />
        <Map/>
        <Network />
      </div>
    </>
  );
}

export default NetworkPage;
