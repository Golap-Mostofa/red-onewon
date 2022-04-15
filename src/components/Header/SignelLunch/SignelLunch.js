import React from 'react';

const SignelLunch = ({lunch}) => {
    const {detail,name,price,img} = lunch
    return (
        <div className='col-lg-4 '>
            <img className='w-50' src={img} alt="" />
            <h4>{name}</h4>
            <p><small>{detail}</small></p>
            <h5>{price}</h5>
        </div>
    );
};

export default SignelLunch;