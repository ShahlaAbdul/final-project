import  { useState } from "react";
import SectionHead from "../../Components/SectionHead";
import bgImage from "../../assets/Images/finalSectionBg2.jpg";
import NewsPanelFormik from "../../Components/NewspanelFormik";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function NewsUpdate({ newsItem }) {
  const { navigate } = useNavigate();

    // eslint-disable-next-line no-unused-vars
    const [initialValues, setInitialValues] = useState([]);
    
//     {
//     head: newsItem.head,
//     date: newsItem.date,
//     content: {
//       title: newsItem.content.title,
//       ending: newsItem.content.ending,
//       call: newsItem.content.call,
//       hashtag: newsItem.content.hashtag,
//     },
//   }

  const handleSave = async (values) => {
    try {
      // eslint-disable-next-line react/prop-types
      await fetch("http://localhost:3200/news/" + newsItem._id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      navigate("/news_panel/edit/");
    } catch (error) {
      console.log("error message");
    }
  };
  return (
    <div>
      <SectionHead
        ptext={"Xəbərlərdə hərhansı dəyişikliyə ehtiyac var?"}
        bgImage={bgImage}
        head={"news edit page"}
      />

      <NewsPanelFormik initialValues={initialValues} onSubmit={handleSave} />
    </div>
  );
}

export default NewsUpdate;
