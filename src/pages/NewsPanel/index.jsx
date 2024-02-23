import SectionHead from "../../Components/SectionHead";
import "./style.scss";
import bgImage from "../../assets/Images/finalSectionBg2.jpg";
import NewsPanelFormik from "../../Components/NewspanelFormik";
import NewsTable from "../../Components/NewsTable";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NewsPanel() {
  const [newsPanel, setNewsPanel] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    fetch("http://localhost:3200/api/news/")
      .then((res) => res.json())
      .then((data) => setNewsPanel(data))
      .catch(() => console.log("not connected"));
  }

  const handleAdd = (formData) => {
    fetch("http://localhost:3200/api/news/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => console.log("Data sent to server:"));
  };
  function handleDelete(id) {
    fetch("http://localhost:3200/api/news/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        getAll();
      });
  }
  function handleEdit(id) {
    navigate(`/news_panel/edit/${id}`);
  }

  return (
    <div>
      <SectionHead ptext={"NewsPanel"} bgImage={bgImage} head={"News Panel"} />
      <NewsPanelFormik onSubmit={handleAdd} />
      <NewsTable
        newsPanel={newsPanel}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default NewsPanel;
