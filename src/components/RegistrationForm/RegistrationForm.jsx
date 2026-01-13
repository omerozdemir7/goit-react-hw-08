import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(7, "Too short").required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={RegistrationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label>Name</label>
          <Field type="text" name="name" className={css.field} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>
        <div className={css.group}>
          <label>Email</label>
          <Field type="email" name="email" className={css.field} />
          <ErrorMessage name="email" component="div" className={css.error} />
        </div>
        <div className={css.group}>
          <label>Password</label>
          <Field type="password" name="password" className={css.field} />
          <ErrorMessage name="password" component="div" className={css.error} />
        </div>
        <button type="submit" className={css.btn}>Register</button>
      </Form>
    </Formik>
  );
}