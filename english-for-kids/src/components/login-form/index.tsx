/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
import { FC, ReactElement, useState } from 'react';
import {
  Form,
  Field,
  FormikProps,
  withFormik,
} from 'formik';
import * as Yup from 'yup';
import './styles.scss';
import useActions from '../../hooks/useActions';

interface Values {
  login: string;
  password: string;
}

interface FormProps {
  initialLogin?: string;
  initialPassword?: string;
}

const InnerForm = (props: FormikProps<Values>): ReactElement => {
  const { setIsOpenModal, closeAsideMenu } = useActions();

  const clickCancelHandler = () => {
    setIsOpenModal(false);
    closeAsideMenu();
  };
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  return (
    <Form className="login-form__form" onSubmit={handleSubmit}>
      <div className="login-form__fields">
      
        <Field
          className="login-form__field"
          id="login"
          name="login"
          placeholder="login"
          autoComplete="off"
          value={values.login}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className="login-form__error">{touched.login && errors.login}</div>
        <Field
          className="login-form__field"
          id="password"
          name="password"
          placeholder="password"
          type="password"
          autoComplete="off"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className="login-form__error">{touched.password && errors.password}</div>
      </div>

      <div className="login-form__control">
        <button
          className="login-form__button login-form__button_cancel"
          type="button"
          onClick={clickCancelHandler}
        >
          Cancel
        </button>
        <button
          className="login-form__button login-form__button_login"
          type="submit"
          disabled={
            isSubmitting ||
            !!(errors.login && touched.login) ||
            !!(errors.password && touched.password)
          }
        >
          Login
        </button>
      </div>
    </Form>
  );
};

const LoginForm: FC = (): ReactElement => {
  const [initialLogin, setInitialLogin] = useState({login: 'admin', password: '12345'});
  const {authorize} = useActions();

  const FormikForm = withFormik<FormProps, Values>({
    mapPropsToValues: (props) => ({
      login: props.initialLogin || '',
      password: props.initialPassword || '',
    }),
    validationSchema: Yup.object().shape({
      login: Yup.string().max(16, 'Must be 16 characters or less').required('Login is required'),
      password: Yup.string().max(16, 'Must be 16 characters or less').required('Password is required'),
    }),
    handleSubmit(
      { login, password }: Values,
      { props, setSubmitting, setErrors }
    ) {
      if (login !== 'admin') {
        setErrors({login: 'Incorrect login or password'});
        setSubmitting(false);
      }
      console.log(login, password);
      authorize({login, password});
    },
  })(InnerForm);

  return (
    <div className="login-form">
      <h3 className="login-form__title">Login</h3>
      <FormikForm initialLogin={initialLogin.login} initialPassword={initialLogin.password}/>
    </div>
  );
};

export default LoginForm;
