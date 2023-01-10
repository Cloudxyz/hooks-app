import React, { useEffect, useState } from 'react'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: ''
    });

    const { username, email } = formState;

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
      first

      return () => {
        second
      }
    }, [formState]);

    useEffect(() => {
      first

      return () => {
        second
      }
    }, [email]);


    return (
        <>
            <h1>Formulario simple</h1>
            <hr />
            <input type="text" className='form-control' placeholder='Username' name='username' value={username} onChange={handleInputChange}/>
            <input type="email" className='form-control mt-2' placeholder='Email' name='email' value={email} onChange={handleInputChange}/>
        </>
    )
}
