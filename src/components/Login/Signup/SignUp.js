import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
    return (
        <div className='signUp-form mt-5'>
            <h1 className='text-center text-primary mb-3'>Create account</h1>

            <form  className='from-container'>
                <h3 className='text-center text-dark'>SignUp</h3>
                <input type="text" name="name" id="" placeholder='Your name' />
                <input type="email" name="email" id="" required placeholder='your email' />
                <input type="password" name="password" id="" required placeholder='password' />
                <input  type="checkbox" name="terms" id="" />
                <label className={`ps-2 `} htmlFor="terms">accept terms of condition</label>
               

                      <input
                     
                      id='submit'
                       type="submit"
                        value="SignUp" />
                <>
                    <p className='text-center'>New to Genius Car <Link to={'/login'} className='text-primary text-decoration-none' >Pleash SignUp</Link></p>
                </>
               
            </form>
               
            
        </div>
    );
};

export default SignUp;