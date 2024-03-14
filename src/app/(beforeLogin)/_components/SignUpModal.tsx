'use client';
import { ChangeEvent, useEffect, useState } from 'react'

export default function SignUpModal () {
  const [ idValue, setIdValue ] = useState('');
  const [ pwValue, setPwValue ] = useState('');
  const [ disable, setDisable ] = useState(false);
  
  const handleChangeIdValue = (e: ChangeEvent<HTMLInputElement>) => {
    setIdValue(e.target.value)
  }
  const handleChangePwValue = (e: ChangeEvent<HTMLInputElement>) => {
    setPwValue(e.target.value)
  }
  
  const handleRegistry = () => {
  }
  const isDisable = () => {
    setDisable(true);
  }
}
useEffect(() => {
  if (idValue && pwValue) {
    return isDisable()
  }
})
return (
    <div>
      <h1>sign up</h1>
      <div>
        <label htmlFor="hwsuid">id</label>
        <input type="text" id="hwsuid" placeholder="enter id" onChange={
          handleChangeIdValue
        } />
        <label htmlFor="hwsupw">pw</label>
        <input type="text" id="hwsupw" placeholder="enter password"
               onChange={
                 handleChangePwValue
               } />
        <button onClick={ handleRegistry } disabled={ disable }>
          SignUp
        </button>
      </div>
    </div>
)
}
