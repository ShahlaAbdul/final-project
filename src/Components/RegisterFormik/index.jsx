import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";
import Button1 from "../Button1";
import { useState } from "react";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  fullName: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    surname: Yup.string().required("Surname is required"),
  }),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  phone: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  age: Yup.number()
    .min(17, "your age is not uynub")
    .required("Age is required"),
});
function RegisterFormik({ onSubmit, initialValues }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section id="login">
      <div id="login" className="register">
        <Formik
          className="formik"
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <div>
            <h1>SignUp Page</h1>
            <Form className="form">
              <div className="fullname">
                {/*  name */}
                <div className="input">
                  <label htmlFor="fullName.name">
                    name: <span>*</span>
                  </label>
                  <Field
                    className="field"
                    name="fullName.name"
                    type="text"
                    placeholder="name"
                  />
                  <ErrorMessage name="fullName.name" component={"span"} />
                </div>
                {/* surname */}
                <div className="input">
                  <label htmlFor="fullName.surname">
                    surname: <span>*</span>
                  </label>
                  <Field
                    className="field"
                    name="fullName.surname"
                    type="text"
                    placeholder="surname "
                  />
                  <ErrorMessage name="fullName.surname" component={"span"} />
                </div>
              </div>

              <div className="fullname">
                {/* email address */}
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
                {/* password */}
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
              </div>

              <div className="fullname">
                {/* phone */}
                <div className="input">
                  <label htmlFor="phone">
                    phone: <span>*</span>
                  </label>
                  <Field
                    className="field"
                    name="phone"
                    type="text"
                    placeholder="phone"
                  />
                  <ErrorMessage name="phone" component={"span"} />
                </div>
                {/* age */}
                <div className="input">
                  <label htmlFor="age">
                    age: <span>*</span>
                  </label>
                  <Field
                    className="field"
                    name="age"
                    type="number"
                    placeholder="age"
                  />
                  <ErrorMessage name="age" component={"span"} />
                </div>
              </div>
              {/* address */}
              <div className="input">
                <label htmlFor="address">
                  address: <span>*</span>
                </label>
                <Field
                  className="field"
                  name="address"
                  type="text"
                  placeholder="address"
                />
                <ErrorMessage name="address" component={"span"} />
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
                <p>Hesabin var ?</p>{" "}
                <Link to={"/user/login"}>
                  <span>Daxil ol!</span>
                </Link>
              </div>
            </Form>
          </div>
        </Formik>
      </div>
    </section>
  );
}

export default RegisterFormik;
