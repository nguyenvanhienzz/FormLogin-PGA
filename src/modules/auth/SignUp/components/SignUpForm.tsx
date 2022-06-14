import axios from 'axios';
import { Form, Formik } from 'formik'
import React from 'react';
import { ISignUpParams } from 'models/auth'
import { SignUpSchema } from 'utils/validate.util'
import Input from './Input';
import './SignUpForm.scss'
import { APIPostUser } from 'utils/constants';

interface Props {
  nastion: any[],
  city: any[],
  handerCity?: (id: number) => Promise<void>,
}

const SignUpForm = (props: Props) => {

  const initialValues: ISignUpParams =
  {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    genders: '1',
    region: '1',
    state: '1',
  }

  const genders: any[] = [
    {
      id: 1,
      name: 'nam',
    },
    {
      id: 2,
      name: 'nữ',
    },
  ];
  const onSubmit = async (values: ISignUpParams) => {
    try {
      await axios.post(APIPostUser, values)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='signup'>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ errors, values }) => {
          return (

            <Form>
              <Input name='email' type='email' label='Email:' errorMess={errors.email} />
              <Input name='password' type='password' label='Mật khẩu:' errorMess={errors.password} />
              <Input name='repeatPassword' type='password' label='Nhập lại mật khẩu:' errorMess={errors.repeatPassword} />
              <Input name='name' label='Họ tên:' errorMess={errors.name} />
              <Input name='genders' label='Giới tính:' as='select' options={genders} errorMess={errors.genders} />
              <Input name='region' label='Quốc gia:' as='select' options={props.nastion} values={values}
                errorMess={errors.region} handerCity={props.handerCity} />
              <Input name='state' label='Thành phố:' as='select' errorMess={errors.state} options={props.city} />
              <button type="submit"> Đăng ký</button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default SignUpForm