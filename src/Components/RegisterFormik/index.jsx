// import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import Button1 from "../Button1";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import "./style.scss";
import Button1 from "../Button1";

function RegisterFormik() {
  const { addToken } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(values) {
    // const { name, surname, email, password, phone, address, age } = values;

    fetch("http://localhost:3200/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        surname: values.surname,
        email: values.email,
        password: values.password,
        phone: values.phone,
        address: values.address,
        age: values.age,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        addToken(data);

        navigate("/login");
      });
  }

  return (
    <section id="register">
      <div className="login">
        <Formik
          className="formik"
          initialValues={{
            name: "",
            surname: "",
            email: "",
            password: "",
            phone: "",
            address: "",
            age: 0,
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            surname: Yup.string().required("Required"),

            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string().required("Required"),
            phone: Yup.string().required("Required"),
            address: Yup.string().required("Required"),
            age: Yup.number().required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            handleSubmit(values, { resetForm });
          }}
        >
          <div>
            <Form className="form">
              <div className="input">
                <label htmlFor="name">
                  name <span>*</span>
                </label>
                <Field
                  className="field"
                  name="name"
                  type="text"
                  placeholder="name address"
                />
                <ErrorMessage name="name" component={"span"} />
              </div>

              <div className="input">
                <label htmlFor="surname">
                  surname <span>*</span>
                </label>
                <Field
                  className="field"
                  name="surname"
                  type="text"
                  placeholder="surname address"
                />
                <ErrorMessage name="surname" component={"span"} />
              </div>

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

              <div className="input">
                <label htmlFor="password">
                  password address: <span>*</span>
                </label>
                <Field
                  className="field"
                  name="password"
                  type="password"
                  placeholder="password address"
                />
                <ErrorMessage name="password" component={"span"} />
              </div>

              <div className="input">
                <label htmlFor="phone">
                  phone address: <span>*</span>
                </label>
                <Field
                  className="field"
                  name="phone"
                  type="text"
                  placeholder="phone address"
                />
                <ErrorMessage name="phone" component={"span"} />
              </div>

              <div className="input">
                <label htmlFor="address">
                  address: <span>*</span>
                </label>
                <Field
                  className="field"
                  name="address"
                  type="text"
                  placeholder="address address"
                />
                <ErrorMessage name="address" component={"span"} />
              </div>

              <div className="input">
                <label htmlFor="age">
                  age address: <span>*</span>
                </label>
                <Field
                  className="field"
                  name="age"
                  type="text"
                  placeholder="age address"
                />
                <ErrorMessage name="age" component={"span"} />
              </div>
              <Button1 text={"Sign in"} type="submit"></Button1>
            </Form>
          </div>
        </Formik>
      </div>
    </section>
  );
}

export default RegisterFormik;
