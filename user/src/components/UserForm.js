import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = ({ values, errors, touched }) => {
  return (
    <div className="user-form">
      <Form>
        <label>
          Name: <Field type="text" name="name" placeholder="name" />{" "}
          {touched.name && errors.name && (
            <p className="errors">{errors.name}</p>
          )}
        </label>
        <label>
          Email: <Field type="text" name="email" placeholder="email" />{" "}
          {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
          )}
        </label>
        <label>
          Password:{" "}
          <Field type="password" name="password" placeholder="password" />
        </label>
        <label className="checkbox-container">
          I have read and agreed to the terms of service
          <Field type="checkbox" name="terms" checked={values.terms} />
        </label>
        <button>Submit</button>
      </Form>
    </div>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValue({ name, email, password, terms }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      terms: false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name field should be filled"),
    email: Yup.string().required("Please enter a valid email")
  }),
  handleSubmit(values, formikBag) {
    console.log("submitting!", values);
  }
})(UserForm);

export default FormikUserForm;
