import React from 'react';
import './SignelDeaner.css'
const SignelDeaner = ({ dinner }) => {
    const { img, name, deatil, price } = dinner
    return (
        <div className='lunch-container col-lg-4'>
            <div>
                <img className='w-50' src={img} alt="" />
                <h3>{name}</h3>
                <p><small>{deatil}</small></p>
                <h5>{price}</h5>
            </div>
        </div>
    );
};

export default SignelDeaner;