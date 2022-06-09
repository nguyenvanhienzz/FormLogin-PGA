import React, { useCallback, useState } from 'react'
import logo from '../../../../logo-420-x-108.png';
import { ILoginParams, ILoginValidation } from '../../../../models/auth';
import LoginForm1 from '../components/LoginForm1';
import '../components/LoginFrom1.scss'
import {getErrorMessageResponse} from '../../../../utils';
import { fetchThunk } from '../../../common/redux/thunk';
import { AppState } from '../../../../redux/reducer';
import { Action } from 'typesafe-actions';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { API_PATHS } from '../../../../configs/api';
import { RESPONSE_STATUS_SUCCESS } from '../../../../utils/httpResponseCode';
import { setUserInfo } from '../../redux/authReducer';
import { ACCESS_TOKEN_KEY } from '../../../../utils/constants';
import Cookies from 'js-cookie';
import { ROUTES } from '../../../../configs/routes';
import { replace } from 'connected-react-router';
import LoginFormik from '../components/LoginFormik';
import { FormikProps } from 'formik';


const LoginPage1:React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const [error,setError]=useState('')
  const [loading,setLoading]=useState(false)

  const onLogin = useCallback(
    async (values: ILoginParams) => {
      setError('');
      setLoading(true);
      const json = await dispatch(
        fetchThunk(API_PATHS.signIn, 'post', { email: values.email, password: values.password }),
      );
      setLoading(false);
      
      if (json?.code=== RESPONSE_STATUS_SUCCESS) {
        dispatch(setUserInfo(json.data));
        Cookies.set(ACCESS_TOKEN_KEY, json.data.token, { expires: values.rememberMe ? 7 : undefined });
        dispatch(replace(ROUTES.home));
        return;
      }
      setError(getErrorMessageResponse(json));
    },
    [dispatch],

  );

  return (
    <div className='loginpage'>
      <img src={logo}/>
      <LoginFormik onLogin={onLogin} />

      {/* loginform */}
      {/* <LoginForm1 onLogin={onLogin} error={error} loading={loading}/> */}
     
    </div>
  )
}

export default LoginPage1