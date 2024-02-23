import { ErrorMessage, Field, Form, Formik } from "formik";
import SectionHead from "../../Components/SectionHead";
import bgImage from "../../assets/Images/finalSectionBg2.jpg";
import Button1 from "../../Components/Button1";
import TitleButton from "../../Components/TitleButton";
import * as Yup from "yup";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function NewsUpdate({ newsId }) {
  const [newsEditData, setNewsEditData] = useState(null);

  const validationSchema = Yup.object().shape({
    head: Yup.string(),
    date: Yup.string(),
    content: Yup.object().shape({
      title: Yup.string(),
      ending: Yup.string(),
      call: Yup.string(),
      hashtag: Yup.string(),
    }),
  });

  useEffect(() => {
    fetch(`http://localhost:3200/news/${newsId}`)
      .then((res) => res.json())
      .then((data) => setNewsEditData(data));
  }, [newsId]);

  // if (!newsEditData) {
  //   return <div>Loading...</div>;
  // }

  function handleSubmit(values, { setSubmitting }) {
    fetch(`http://localhost:3200/users/${newsId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then(() => {
        setSubmitting(false);
      });
  }

  return (
    <>
      <SectionHead
        ptext={"Xəbərlərdə hərhansı dəyişikliyə ehtiyac var?"}
        bgImage={bgImage}
        head={"news edit page"}
      ></SectionHead>
      <section id="update_table">
        <Formik
          initialValues={newsEditData}
          validationSchema={validationSchema}
          // onSubmit={onSubmit}
        >
          <div className="update_table">
            <TitleButton text={"add News"} />
            <h1>Yeni Xəbər əlavə et</h1>
            <Form className="table_content">
              <div className="form_sec">
                <label htmlFor="image"> image</label>
                <Field
                  className="field"
                  name="image"
                  type="text"
                  placeholder="image"
                />
                <ErrorMessage name="image" />
              </div>

              <div className="form_sec">
                <label htmlFor="head">Head</label>
                <Field
                  className="field"
                  name="head"
                  type="text"
                  placeholder="head"
                />
                <ErrorMessage name="head" />
              </div>

              <div className="form_sec">
                <label htmlFor="date">Date</label>
                <Field
                  className="field"
                  name="date"
                  type="text"
                  placeholder="date"
                />
                <ErrorMessage name="date" />
              </div>

              <div className="form_sec">
                <label htmlFor="content.ending">content ending</label>
                <Field
                  className="field"
                  name="content.ending"
                  type="text"
                  placeholder="content ending"
                />
                <ErrorMessage name="content.ending" />
              </div>

              <div className="form_sec">
                <label htmlFor="content.hashtag">content hashtag</label>
                <Field
                  className="field"
                  name="content.hashtag"
                  type="text"
                  placeholder="content hashtag"
                />
              </div>

              <div className="form_sec">
                <label htmlFor="content.call">content call</label>
                <Field
                  className="field"
                  name="content.call"
                  type="text"
                  placeholder="content call"
                />
                <ErrorMessage name="content.call" />
              </div>

              <div className="form_sec">
                <label htmlFor="content.title">content title</label>
                <Field
                  as="textarea"
                  className="field_textarea"
                  name="content.title"
                  type="text"
                  placeholder="content title"
                />
                <ErrorMessage name="content.title" />
              </div>
              <Button1 text={"submit"} onClick={() => handleSubmit()}></Button1>
            </Form>
          </div>
        </Formik>
      </section>
    </>
  );
}

export default NewsUpdate;
