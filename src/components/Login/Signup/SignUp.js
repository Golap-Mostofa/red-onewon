import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
const SignUp = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const hendelEmail = e =>{
        setEmail(e.target.value)
    }
    const hendelPassword = e =>{
        setPassword(e.target.value)
    }
    const HendelSubmit = e =>{
        e.preventDefault()
        createUserWithEmailAndPassword(email,password)
    }
    if (user) {
        navigate('/')
    }
    return (
        <div className='signUp-form mt-5'>
            <h1 className='text-center text-primary mb-3'>Create account</h1>

            <form onSubmit={HendelSubmit} className='from-container'>
                <h3 className='text-center text-dark'>SignUp</h3>

                <input type="text" name="name" id="" placeholder='Your name' />
                <input type="email" name="email" id="" required onBlur={hendelEmail} placeholder='your email' />

                <input onBlur={hendelPassword} type="password" name="password" id="" required placeholder='password' />

                <input type="checkbox" name="terms" id="" />

                <label className={`ps-2 `} htmlFor="terms">accept terms of condition</label>
                 {/* <input id='submit' type="subumit" value="SignUp" /> */}
                    <input type="submit" value="SignUp" />
                {/* <>
                    <p className='text-center'>New to Genius Car <Link to={'/login'} className='text-primary text-decoration-none' >Pleash SignUp</Link></p>
                </> */}

            </form>


        </div>
    );
};

export default SignUp;