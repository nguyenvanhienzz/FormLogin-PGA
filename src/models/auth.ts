export interface ILoginParams {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface ILoginValidation {
  email: string;
  password: string;
}
export interface ISignUpParams {
  name: string,
  email: string;
  password: string;
  repeatPassword: string,
  genders: string,
  state: string,
  region: string,
}
