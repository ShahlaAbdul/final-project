import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";
import Button1 from "../Button1";
import { useState } from "react";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string().min(8, " must be 8 characters at least"),
  password: Yup.string().email("Invalid email adress"),
});
// eslint-disable-next-line react/prop-types
function LoginFormik({ onSubmit, initialValues }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section id="login">
      <div className="login">
        <Formik
          className="formik"
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <div>
            <h1>Login Page</h1>
            <Form className="form">
              <div className="input">
                <label htmlFor="email">
                  Email address: <span>*</span>
                </label>
                <Field
                  className="field"
                  name="email"
                  type="email"
                  placeholder="email address"
                />
                <ErrorMessage name="email" component={"span"} />
              </div>
              <div className="input2">
                <label htmlFor="password">
                  password: <span>*</span>
                </label>
                <Field
                  className="field"
                  name="password"
                  type="password"
                  placeholder="password "
                />
                <ErrorMessage name="password" component={"span"} />
              </div>

              <div className="checkbox">
                <div className="checkbox_input">
                  <Field type="checkbox" name="toggle" id="toggle" />
                  <label htmlFor="toggle" className="label">
                    Remember me
                  </label>
                </div>
                <ErrorMessage name="toggle" component={"span2"} />
              </div>
              <Button1 text={"Daxil ol"} onSubmit={onSubmit} />
              <div className="go_sign">
                <p>Hesabin yoxdur?</p>
                <Link to={"/user/register"}>
                  <span>Qeydiyyatdan kec!</span>
                </Link>
              </div>
            </Form>
          </div>
        </Formik>
      </div>
    </section>
  );
}
export default LoginFormik;
