import React, { useCallback, useState } from 'react'
import { ILoginParams, ILoginValidation } from 'models/auth';
import { validateLogin } from '../../utils';
import './LoginFrom1.scss';

type Props = {
  onLogin(values: ILoginValidation): void,
  error: string,
  loading: boolean,
}

const LoginForm1 = (props: Props) => {

  const [inputValues, setInputValues] = useState<ILoginParams>({ email: '', password: '', rememberMe: false })
  const [errorValidate, setErrorValidate] = React.useState<ILoginValidation>();
  const onClick = useCallback(() => {
    setErrorValidate(validateLogin(inputValues))
    props.onLogin(inputValues);
  }, [inputValues, errorValidate])
  return (
    <div className='login'>
      <form noValidate
        onSubmit={(e) => {
          e.preventDefault()
          onClick()
        }}>
        <li>
          <span>Địa chỉ Email:</span><br />
          <input type="email"
            value={inputValues.email} onChange={(e) => { setInputValues({ ...inputValues, email: e.target.value }) }} /><br />
          {!!errorValidate?.email && (
            <small className="text-danger">
              {errorValidate.email}
            </small>
          )}
        </li>
        <li>
          <span>Password:</span><br />
          <input type="password" value={inputValues.password} onChange={(e) => { setInputValues({ ...inputValues, password: e.target.value }) }} /><br />
          {!!errorValidate?.password && (
            <small className="text-danger">
              {errorValidate.password}
            </small>
          )}
        </li>

        <li className='check'>
          <input type='checkbox' id='checkbox' disabled={props.loading} /><span>Lưu thông tin đăng nhập</span>
          {props.loading && <div role="status"></div>}
        </li>
        <li>
          <button type='submit' disabled={props.loading}>Đăng nhập </button>
        </li>
      </form>
    </div>
  )
}

export default LoginForm1