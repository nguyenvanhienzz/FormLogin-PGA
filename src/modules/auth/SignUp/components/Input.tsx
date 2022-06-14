import React from 'react';
import { Field } from 'formik'
import { useEffect } from 'react'
import './SignUpForm.scss';

interface Props {
  label: string
  name: string,
  type?: string
  errorMess: any,
  as?: string,
  values?: any,
  options?: any[] | undefined,
  handerCity?: (id: number) => Promise<void>
}

const Input = (props: Props) => {

  useEffect(() => {
    if (props.handerCity && props.values?.region) {
      props.handerCity(Number(props.values?.region))
    }
  }, [props.options, props.values])

  return (
    <div className='input-form'>
      <label>{props.label}</label><br />
      <Field name={props.name} type={props.type} as={props.as} id='input'>
        {
          props.as && props?.options && props?.options?.map((item: any) => (
            <option key={item.id} value={item.id} >{item.name}</option>
          ))
        }
      </Field>
      {
        props.errorMess && <div className='error'>{props.errorMess}</div>
      }
    </div>
  )
}

export default Input