import { ErrorMessage, Field, Formik } from "formik";
import TitleButton from "../TitleButton";
import { Form } from "react-router-dom";
import * as Yup from "yup";
import "./style.scss";
import Button1 from "../Button1";


const validationSchema = Yup.object().shape({
  filial: Yup.string(),
    location: Yup.string(),
    call: Yup.string(),
  hours: Yup.object().shape({
    weekly: Yup.string(),
    weekend: Yup.string(),
  }),
});

function ServicesFormik({ initialValues, onSubmit }) {
  return (
    <section id="news_add">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <div>
          <TitleButton text={"add Filials"} />
          <h1>Yeni Filial əlavə et</h1>
          <Form className="news_add">
            <div className="form_sec">
              <label htmlFor="filial">filial</label>
              <Field
                className="field"
                name="filial"
                type="text"
                placeholder="filial"
              />
              <ErrorMessage name="filial" />
            </div>

            <div className="form_sec">
              <label htmlFor="location">location</label>
              <Field
                className="field"
                name="location"
                type="text"
                placeholder="location"
              />
              <ErrorMessage name="date" />
            </div>

            <div className="form_sec">
              <label htmlFor="call">Call</label>
              <Field
                className="field"
                name="call"
                type="text"
                placeholder="content ending"
              />
              <ErrorMessage name="call" />
            </div>

            <div className="form_sec">
              <label htmlFor="hours.weekly">hours weekly</label>
              <Field
                className="field"
                name="hours.weekly"
                type="text"
                placeholder="hours weekly"
              />
            </div>

            <div className="form_sec">
              <label htmlFor="hours.weekend">hours weekend</label>
              <Field
                className="field"
                name="hours.weekend"
                type="text"
                placeholder="hours weekend"
              />
              <ErrorMessage name="hours.weekend" />
            </div>

            <Button1 text={"Əlavə et"} onSubmit={onSubmit} />
          </Form>
        </div>
      </Formik>
    </section>
  );
}

export default ServicesFormik;
