import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";
import Button1 from "../Button1";
import TitleButton from "../TitleButton";

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
// eslint-disable-next-line react/prop-types
function NewsPanelFormik({ onSubmit, initialValues }) {
  return (
    <section id="news_add">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <div>
          <TitleButton text={"add News"} />
          <h1>Yeni Xəbər əlavə et</h1>
          <Form className="news_add">
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
            <Button1 text={"Əlavə et"} onSubmit={onSubmit} />
          </Form>
        </div>
      </Formik>
    </section>
  );
}

export default NewsPanelFormik;
