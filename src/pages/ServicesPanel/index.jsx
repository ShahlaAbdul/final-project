import SectionHead from "../../Components/SectionHead";
import "./style.scss";
import bgImage from "../../assets/Images/finalSectionBg2.jpg";
import ServicesFormik from "../../Components/ServicesFormik";
import ServicesTable from "../../Components/ServicesTable";
function ServicesPanel() {
  return (
    <div>
      <SectionHead
        ptext={"Filiallarimiz"}
        head={"ServicesPanel"}
        bgImage={bgImage}
      />

      {/* <ServicesFormik/> */}
      <ServicesTable
        servicesPanel={servicesPanel}
        // handleDelete={handleDelete}
        // handleEdit={handleEdit}
      />
    </div>
  );
}

export default ServicesPanel;
