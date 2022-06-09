import { ILoginParams, ILoginValidation } from '../../models/auth';
import { validEmailRegex } from '../../utils';

const validateEmail = (email: string) => {
  if (!email) {
    return 'Vui lòng nhập email';
  }
  if (!validEmailRegex.test(email)) {
    return 'Email không hợp lệ !';
  }
  return '';
};

const validatePassword = (password: string) => {
  if (!password) {
    return 'Vui lòng nhập mật khẩu';
  }

  if (password.length < 4) {
    return 'Mật khẩu phải lớn hơn 4 kí tự';
  }

  return '';
};

export const validateLogin = (values: ILoginParams): ILoginValidation => {
  return {
    email: validateEmail(values.email),
    password: validatePassword(values.password),
  };
};

export const validLogin = (values: ILoginValidation) => {
  return !values.email && !values.password;
};
