import React from 'react'
import RegisterImage from '@components/register/image/RegisterImage'
import LoginForm from './form/LoginForm'

function Login() {
    return (
        <main className='login'>
            <RegisterImage />
            <LoginForm />
        </main>
    )
}

export default Login