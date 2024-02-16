import "./style.scss";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
function RequestQuote() {
  return (
    <div>
      <div className="request">
        <Formik
          initialValues={{ name: "", phone: "", email: "" }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            phone: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="form">
            <label htmlFor="name">Your Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />

            <label htmlFor="phone">Phone</label>
            <Field name="phone" type="text" />
            <ErrorMessage name="phone" />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default RequestQuote;
