import React, { useCallback, useEffect, useState } from 'react'
import SignUpForm from 'modules/auth/SignUp/components/SignUpForm';
import 'modules/auth/SignUp/components/SignUpForm.scss'
import logo from 'logo-420-x-108.png';
import axios from 'axios';
import { APINation } from 'utils/constants';


const onSignUp = () => {
  const [nation, setNation] = useState<any[]>([])
  const [city, setCity] = useState<any[]>([])
  useEffect(() => {
    const handerValues = async () => {
      const nastions: any = await axios.get(APINation);
      setNation(nastions.data.data)
    }
    handerValues()
  }, [])

  const handerCity = useCallback(async (id: number) => {
    const citys: any = await axios.get(`${APINation}?pid=${id}`);
    setCity(citys.data.data)
  }, [])
  return (
    <div className='onsignup'>
      <img src={logo} className='img-signup' />
      <SignUpForm
        nastion={nation}
        city={city}
        handerCity={handerCity}
      />
    </div>
  )
}

export default onSignUp