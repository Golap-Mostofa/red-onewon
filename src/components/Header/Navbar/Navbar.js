import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import Main from '../Main/Main';
import './Navbar.css'
const Navbar = () => {
    return (
    <div>
        <nav  className='d-flex justify-content-between align-content-center  p-2 sticky-top nav-color'>
            <div>
                <img style={{ height: '50px' }} className='ms-3' src={logo} alt="" />
            </div>
            <div className='d-flex font-weight-bold'>
                <Link className='text-decoration-none text-white me-5 font-weight-bold' to='/'>Home</Link>
                <Link className='text-decoration-none text-white me-5 font-weight-bold' to='/'>Login</Link>
                <Link className='text-decoration-none text-white me-5 font-weight-bold' to='/'>Sign up</Link>

            </div>
        </nav>
        <Main></Main>
    </div>
    );
};

export default Navbar;