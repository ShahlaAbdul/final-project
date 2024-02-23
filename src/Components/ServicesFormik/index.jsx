/* eslint-disable react/prop-types */
import { ErrorMessage, Field, Formik, Form } from "formik";
import TitleButton from "../TitleButton";
import * as Yup from "yup";
import "./style.scss";
import Button1 from "../Button1";
import { useContext } from "react";
import { UserContext } from "../../Context/userContext";

const validationSchema = Yup.object().shape({
  filial: Yup.string(),
  location: Yup.string(),
  call: Yup.string(),
  hours: Yup.object().shape({
    weekly: Yup.string(),
    weekend: Yup.string(),
  }),
});

function ServicesFormik() {
  const { token, decode, addToken, logOut } = useContext(UserContext);
  
  return (
    <section id="update_table">
      <Formik
        initialValues={{
          filial: "",
          location: "",
          call: "",
          hours: {
            weekly: "",
            weekend: "",
          },
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                     
                        console.log(values);
                        fetch("http://localhost:3000/booking/",
                            {
                                method: "POST",
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                    'Authorization': `${token}`
                                },
                                body: JSON.stringify(values)
                            })
                            .then(function (res) { console.log(res) })
                            .catch(function (res) { console.log(res) })
                        setSubmitting(false);
                        resetForm();
                    }, 400);
                }}
      >
        <div>
          <TitleButton text={"add Filial"} />
          <h1>Yeni Filial əlavə et</h1>
          <Form className="update_table">
            <div className="form_sec">
              <label htmlFor="filial"> filial</label>
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
              <ErrorMessage name="location" />
            </div>

            <div className="form_sec">
              <label htmlFor="call">call</label>
              <Field
                className="field"
                name="call"
                type="text"
                placeholder="call"
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
              <ErrorMessage name="hours.weekly" />
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
