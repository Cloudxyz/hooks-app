import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {

  const {formState, handleInputChange, handleResetForm, username, email, password} = useForm({
    username: '',
    email: '',
    password: ''
  });

  // const { username, email, password } = formState;

  return (
      <>
          <h1>Formulario con custom hook</h1>
          <hr />
          <input type="text" className='form-control' placeholder='Username' name='username' value={username} onChange={handleInputChange}/>
          <input type="email" className='form-control mt-2' placeholder='Email' name='email' value={email} onChange={handleInputChange}/>
          <input type="password" className='form-control mt-2' placeholder='Password' name='password' value={password} onChange={handleInputChange}/>
          <button className='btn btn-primary mt-2' onClick={handleResetForm}>Limpiar</button>
      </>
  )
}
