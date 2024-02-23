// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { Link, useNavigate } from "react-router-dom";
// import * as Yup from "yup";
// import Button1 from "../Button1";
// import "./style.scss";

// function RegisterFormik() {
//   const navigate = useNavigate();

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     surname: Yup.string().required("Surname is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     password: Yup.string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//     phone: Yup.string().required("Phone number is required"),
//     address: Yup.string().required("Address is required"),
//     age: Yup.number()
//       .min(17, "your age is not uynub")
//       .required("Age is required"),
//   });

//   // function handleSubmit(values) {
//   //   fetch("http://localhost:3200/register", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify({
//   //       name: values.name,
//   //       surname: values.surname,
//   //       email: values.email,
//   //       password: values.password,
//   //       phone: values.phone,
//   //       address: values.address,
//   //       age: values.age,
//   //     }),
//   //   })
//   //     .then((res) => res.json())
//   //     .then(() => {
//   //       navigate("/users/login");
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error during registration:", error.message);
//   //     });
//   // }

//   return (
//     <section id="login">
//       <div id="login" className="register">
//         <Formik
//           className="formik"
//           initialValues={{
//             name: "",
//             surname: "",
//             email: "",
//             password: "",
//             phone: "",
//             address: "",
//             age: "",
//           }}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           <div>
//             <h1>SignUp Page</h1>
//             <Form className="form">
//               <div className="fullname">
//                 {/*  name */}
//                 <div className="input">
//                   <label htmlFor="name">
//                     name: <span>*</span>
//                   </label>
//                   <Field
//                     className="field"
//                     name="name"
//                     type="text"
//                     placeholder="name"
//                   />
//                   <ErrorMessage name="name" component={"span"} />
//                 </div>
//                 {/* surname */}
//                 <div className="input">
//                   <label htmlFor="surname">
//                     surname: <span>*</span>
//                   </label>
//                   <Field
//                     className="field"
//                     name="surname"
//                     type="text"
//                     placeholder="surname "
//                   />
//                   <ErrorMessage name="surname" component={"span"} />
//                 </div>
//               </div>

//               <div className="fullname">
//                 {/* email address */}
//                 <div className="input">
//                   <label htmlFor="email">
//                     Email address: <span>*</span>
//                   </label>
//                   <Field
//                     className="field"
//                     name="email"
//                     type="email"
//                     placeholder="email address"
//                   />
//                   <ErrorMessage name="email" component={"span"} />
//                 </div>
//                 {/* password */}
//                 <div className="input2">
//                   <label htmlFor="password">
//                     password: <span>*</span>
//                   </label>
//                   <Field
//                     className="field"
//                     name="password"
//                     type="password"
//                     placeholder="password "
//                   />
//                   <ErrorMessage name="password" component={"span"} />
//                 </div>
//               </div>

//               <div className="fullname">
//                 {/* phone */}
//                 <div className="input">
//                   <label htmlFor="phone">
//                     phone: <span>*</span>
//                   </label>
//                   <Field
//                     className="field"
//                     name="phone"
//                     type="text"
//                     placeholder="phone"
//                   />
//                   <ErrorMessage name="phone" component={"span"} />
//                 </div>
//                 {/* age */}
//                 <div className="input">
//                   <label htmlFor="age">
//                     age: <span>*</span>
//                   </label>
//                   <Field
//                     className="field"
//                     name="age"
//                     type="number"
//                     placeholder="age"
//                   />
//                   <ErrorMessage name="age" component={"span"} />
//                 </div>
//               </div>
//               {/* address */}
//               <div className="input">
//                 <label htmlFor="address">
//                   address: <span>*</span>
//                 </label>
//                 <Field
//                   className="field"
//                   name="address"
//                   type="text"
//                   placeholder="address"
//                 />
//                 <ErrorMessage name="address" component={"span"} />
//               </div>

//               <div className="checkbox">
//                 <div className="checkbox_input">
//                   <Field type="checkbox" name="toggle" id="toggle" />
//                   <label htmlFor="toggle" className="label">
//                     Remember me
//                   </label>
//                 </div>
//                 <ErrorMessage name="toggle" component={"span2"} />
//               </div>
//               <Button1 text={"Daxil ol"} onSubmit={handleSubmit} />
//               <div className="go_sign">
//                 <p>Hesabin var ?</p>{" "}
//                 <Link to={"/user/login"}>
//                   <span>Daxil ol!</span>
//                 </Link>
//               </div>
//             </Form>
//           </div>
//         </Formik>
//       </div>
//     </section>
//   );
// }

// export default RegisterFormik;

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button1 from "../Button1";

function RegisterFormik() {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await fetch("http://localhost:3200/register", {
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
      });
      resetForm();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Formik
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
        <Form>
          <label htmlFor="name"> Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="surname">Surname</label>
          <Field name="surname" type="text" />
          <ErrorMessage name="surname" />

          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <label htmlFor="password">password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" />

          <label htmlFor="phone">phone</label>
          <Field name="phone" type="text" />
          <ErrorMessage name="phone" />

          <label htmlFor="address">address</label>
          <Field name="address" type="text" />
          <ErrorMessage name="address" />

          <label htmlFor="age">age</label>
          <Field name="age" type="number" />
          <ErrorMessage name="age" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default RegisterFormik;
