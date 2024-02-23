import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./style.scss";
import { useEffect, useState } from "react";
import SectionHead from "../../Components/SectionHead";
import bgImage from "../../assets/Images/finalSectionBg2.jpg";
import Button1 from "../../Components/Button1";
import TitleButton from "../../Components/TitleButton";
// import Button1 from "../Button1";

// eslint-disable-next-line react/prop-types
function UserEdit({ userId }) {
  const [userEditData, setUserEditData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3200/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserEditData(data));
  }, [userId]);

  //   if (!userEditData) {
  //     return <div>Loading...</div>;
  //   }

  const validationSchema = Yup.object().shape({
    fullName: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      surname: Yup.string().required("Surname is required"),
    }),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    phone: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
    age: Yup.number()
      .required("Age is required")
      .positive("Age must be a positive number"),
  });

  function handleSubmit(values, { setSubmitting }) {
    fetch(`http://localhost:3200/users/${userId}`, {
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
    <div>
      <SectionHead
        bgImage={bgImage}
        ptext={"Məlumatları guncəlləmək istəyirsiniz?"}
        head={"User Update page0"}
      />
      <section id="update_table">
        <div>
          <Formik
            initialValues={userEditData}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <div className="update_table">
              <TitleButton text={"Update User Info"} />
              <h1>Istifadəçi məlumatlarını güncəllə </h1>
              <Form className="table_content">
                <div className="form_sec">
                  <label htmlFor="fullName.name">First Name</label>
                  <Field
                    name="fullName.name"
                    type="text"
                    className="field"
                    placeholder="name"
                  />
                  <ErrorMessage
                    name="fullName.name"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form_sec">
                  <label htmlFor="fullName.surname"> surname</label>
                  <Field
                    name="fullName.surname"
                    type="text"
                    className="field"
                    placeholder="surname"
                  />
                  <ErrorMessage
                    name="fullName.surname"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form_sec">
                  <label htmlFor="email">Email Address</label>
                  <Field
                    name="email"
                    type="email"
                    className="field"
                    placeholder="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form_sec">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="field"
                    placeholder="pasword"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form_sec">
                  <label htmlFor="phone">Phone</label>
                  <Field
                    name="phone"
                    type="text"
                    className="field"
                    placeholder="phone"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form_sec">
                  <label htmlFor="address">Address</label>
                  <Field
                    name="address"
                    type="text"
                    className="field"
                    placeholder="address"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form_sec">
                  <label htmlFor="age">Age</label>
                  <Field
                    name="age"
                    type="number"
                    className="field"
                    placeholder="age"
                  />
                  <ErrorMessage
                    name="age"
                    component="div"
                    className="error-message"
                  />
                </div>

                <Button1 text={"Submit"} />
              </Form>
            </div>
          </Formik>
        </div>
      </section>
    </div>
  );
}

export default UserEdit;
