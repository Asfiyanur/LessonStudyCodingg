import React from "react";
import { useFormik } from "formik";
import useAuthCalls from "../hooks/useAuthCalls";
import * as Yup from "yup";

//TODO yup validation schema

const loginShema = Yup.object({
  email: Yup.string().email("geçersiz").required("zorunlu"),
  password: Yup.string()
    .min(4, "en az 4 karakter")
    .max(8, "en fazla 8 karakter")
    .required("zorunlu"),
});

const Login = () => {
  const { login } = useAuthCalls();
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginShema,
    onSubmit: (values, action) => {
      login(values);
      action.resetForm();
    },
  });
  return (
    <div className="h-screen bg-slate-500 flex justify-center items-center text-center">
      <form onSubmit={handleSubmit}>
        <input
          className="mb-5"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        <p>{errors.email ? errors.email : ""}</p>
        <input
          className="mb-5"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={values.password}
        />
        <p>{errors.password ? errors.password : ""}</p>
        <button type="submit"> login</button>
      </form>
    </div>
  );
};

export default Login;
