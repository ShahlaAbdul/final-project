import SectionHead from "../../Components/SectionHead";
import "./style.scss";
import bgImage from "../../assets/Images/finalSectionBg2.jpg";
import ServicesFormik from "../../Components/ServicesFormik";
import ServicesTable from "../../Components/ServicesTable";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function ServicesPanel() {
  const [servicesPanel, setServicesPanel] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    fetch("http://localhost:3200/api/services")
      .then((res) => res.json())
      .then((data) => setServicesPanel(data))
      .catch(() => console.log("not connected"));
  }

  const handleAdd = (formData) => {
    fetch("http://localhost:3200/api/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => console.log("Data sent to server:"));
    getAll();
    navigate("/services_panel");
  };

  function handleDelete(id) {
    fetch("http://localhost:3200/api/services/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        getAll();
      });
  }
  function handleEdit(id) {
    navigate(`/services_panel/edit/${id}`);
  }
  return (
    <div>
      <SectionHead
        ptext={"Filiallarimiz"}
        head={"ServicesPanel"}
        bgImage={bgImage}
      />

      <ServicesFormik onSubmit={handleAdd} />
      <ServicesTable
        servicesPanel={servicesPanel}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default ServicesPanel;
