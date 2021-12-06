import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ILoginParams } from '../../../models/auth';

interface Props {}

const LoginForm = (props: Props) => {
  const [formValues, setFormValues] = React.useState<ILoginParams>({ email: '', password: '' });

  const onSubmit = React.useCallback(() => {
    console.log('a');
  }, []);

  return (
    <form
      style={{ maxWidth: '768px', width: '100%' }}
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        e.currentTarget.checkValidity();
        console.log(formValues);
      }}
    >
      <div className="mb-3 row">
        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
          <FormattedMessage id="email" />
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputEmail"
            value={formValues.email}
            onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
          />

          <div className="invalid-feedback">Please choose a username.</div>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
          <FormattedMessage id="password" />
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            value={formValues.password}
            onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
          />
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <button className="btn btn-primary" type="submit">
            <FormattedMessage id="register" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
