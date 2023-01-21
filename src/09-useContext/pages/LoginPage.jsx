import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

export const LoginPage = () => {

    const {user, setUser} = useContext(UserContext);
    return (
        <>
            <h1>Login Page</h1>
            <h2>Usuario: {user?.name}</h2>
            <hr />
            <button
                className='btn btn-primary'
                onClick={() => setUser({id: 123, name: 'Alan'})}
            >
                Usuario
            </button>
        </>
    )
}
