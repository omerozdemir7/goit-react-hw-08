import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css"; // ContactForm css'ini kopyalayabilirsin

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
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
        <button type="submit" className={css.btn}>Log In</button>
      </Form>
    </Formik>
  );
}