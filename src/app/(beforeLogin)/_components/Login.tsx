'use client';
import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/router'

export const Login = () => {
  const router = useRouter();
  const [ idValue, setIdValue ] = useState('');
  const [ pwValue, setPwValue ] = useState('');
  const [ pwType, setPwType ] = useState("text");
  const handlePasswordType = () => {
    if (pwType === "text") {
      setPwType("password");
    } else {
      setPwType("text");
    }
  }
  const handleSignup = () => {
    router.push('/signup');
  }
  const handleLogin = () => {
    router.push('/login');
  }
  const handleChangeIdValue = (e:ChangeEvent<HTMLInputElement>) => {
    setIdValue(e.target.value);
  }
  const handleChangePwValue = (e:ChangeEvent<HTMLInputElement>) => {
    setPwValue(e.target.value);
  }
  return (
      <>
        <label htmlFor="hmid">id</label>
        <input type="text" value={ idValue } onChange={
          handleChangeIdValue
        } id="hmid" placeholder="enter id" />
        <label htmlFor="hmpw">pw</label>
        <input type={ pwType } value={ pwValue } onChange={
          handleChangePwValue
        } id="hmpw" placeholder="enter password" />
        <button onClick={ handlePasswordType }>Icon:viewing</button>
        <button onClick={ handleLogin }>Login</button>
        <button onClick={ handleSignup }>Join us</button>
      </>
  )
}
