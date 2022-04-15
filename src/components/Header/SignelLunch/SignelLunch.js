import React from 'react';
import './SignelLunch.css'
import { StarIcon } from '@heroicons/react/solid'
import icone from '../../../images/icons/Path 1.png'
const SignelLunch = ({lunch}) => {

    const {detail,name,price,img} = lunch
    return (
        <div className='col-lg-4 lunch-container '>
            <div>
            <img className='w-50' src={img} alt="" />
            <h4 className='text-primary'>{name}</h4>
            <p><small>{detail}</small></p>
            <div className='d-flex justify-content-evenly align-items-center'>
            <h5 className='text-danger fs-5 pt-2'>{price}</h5>
            <StarIcon className='star'></StarIcon>
            <StarIcon className='star'></StarIcon>
            <StarIcon className='star'></StarIcon>
            <img src={icone} alt="" />
            </div>
            </div>
        </div>
    );
};

export default SignelLunch;