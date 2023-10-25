import React from 'react'
import './styles/forgotPassword.css'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'
import lock from './images/ic_lock_password.svg'

const ForgotPassword = () => {
    return (
        <div className='forgotPassword relative'>
            <div className='w-screen h-screen bg-white/[.8]'>
                <Container>
                    <div className="h-screen flex py-28 px-4 justify-center items-center">
                        <div className="resetPassword bg-white p-8 rounded-large shadow-2xl max-w-[35%]">
                            <img src={lock} alt="" className='mx-auto my-4'/>
                            <h2 className='font-bold  text-3xl text-slate-800 leading-snug text-center mt-6'>Forgot Your Password?</h2>
                            <p className='my-4 text-md text-center text-slate-800'>Please enter the email address associated with your account and We will email you a link to reset your password.</p>
                            <input type="email" name="" id="" placeholder='Email address' className='bg-neutral-100 w-full rounded-lg my-6 p-4 text-sm text-slate-800 outline-0' />
                            <button type="submit" className='bg-zinc-800 w-full rounded-lg p-3 text-white font-bold tracking-wide mb-6 transition-all duration-500 hover:bg-zinc-700'>Reset Password</button>
                            <Link to='/' className='p-2 block w-full text-center hover:underline underline-offset-4'><i className="fa-solid fa-house"></i> Return to Home</Link>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default ForgotPassword
