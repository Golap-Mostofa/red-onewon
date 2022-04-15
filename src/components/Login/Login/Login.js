import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Login = () => {
    const navitate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        navitate('/')
    }

    return (
        <div className='signUp-form mt-5'>
        <h1 className='text-center text-primary mb-3'>Pleash Login</h1>

        <form  className='from-container'>
            <h3 className='text-center text-dark'>Login account</h3>
            
            <input type="email" name="email" id="" required placeholder='your email' />
            <input type="password" name="password" id="" required placeholder='password' />
            <input  type="checkbox" name="terms" id="" />
            <label className={`ps-2 `} htmlFor="terms">accept terms of condition</label>
           

                  <input
                 
                  id='submit'
                   type="submit"
                    value="Login" />
            <>
                <p className='text-center'>New to Genius Car <Link to={'/login'} className='text-primary text-decoration-none' >Pleash SignUp</Link></p>
            </>
           
        </form>
        <button onClick={()=>signInWithGoogle()}>Google</button>
        
    </div>
    );
};

export default Login;