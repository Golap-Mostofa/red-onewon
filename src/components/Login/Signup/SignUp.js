import React from 'react';
import './SignUp.css'
const SignUp = () => {
    return (
        <div className='SignUp-fild'>
            <div className='container '>
                <input className='d-block' type="text"  placeholder='Your name'/>
                <input className='d-block' type="email" name="email" id="" placeholder='Your email'/>
                <input className='d-block' type="password" name="password" id="" placeholder='password'/>
                <input className='d-block' type="submit" value="Login" />
            </div>
        </div>
    );
};

export default SignUp;