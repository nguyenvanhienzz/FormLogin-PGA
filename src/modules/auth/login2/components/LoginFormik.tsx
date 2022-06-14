import React, { useCallback, useState } from 'react'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ILoginParams, ILoginValidation } from 'models/auth';

interface Props {
  onLogin(values: ILoginParams): void
}
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email không hợp lệ !")
    .required('Vui lòng nhập email'),
  password: Yup.string()
    .min(5, 'Mật khẩu phải lớn hơn 5 kí tự')
    .required('Vui lòng nhập mật khẩu'),
})

const LoginFormik: React.FC<Props> = (props) => {
  const [initialValues, setInitialValues] = useState<ILoginParams>({ email: '', password: '', rememberMe: false });
  const handerSubmit = useCallback(() => {
    props.onLogin(initialValues)
  }, [initialValues, props.onLogin])

  return (
    <div className='formik'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handerSubmit}
      >
        {/* formikProps */}
        {({ errors, touched, values }) => (
          <>
            {
              setInitialValues(values)
            }
            <Form >
              <div>
                <label htmlFor="email">Email:</label><br />
                <Field id="email" name='Email' placeholder="email" type="email"
                />
                {touched.email && errors.email && <div className='error'>{errors.email}</div>}
              </div>
              <div>
                <label htmlFor="password">Password:</label><br />
                <Field id="password" name="Password" placeholder="password" type="password"
                />
                {touched.password && errors.password && <div className='error'>{errors.password}</div>}
              </div>
              <div className='checkbox'>
                <Field type='checkbox' id="rememberMe" name="rememberMe" />
                <label htmlFor="rememberMe" >Lưu thông tin đăng nhập</label><br />
              </div>
              <button type='submit'>Đăng nhập</button>
            </Form></>)}
      </Formik>
    </div>
  )
}

export default LoginFormik