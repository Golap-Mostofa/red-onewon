import React from 'react';
import './FastFood.css'
const FastFood = ({breakfast}) => {

    
        const {name,deatil,img,price} = breakfast
    return (
        <div className="col-lg-4 breakfast">
            
                <div >
                    <img className='w-50' src={img} alt="" />
                    <h3>{name}</h3>
                    <small>{deatil}</small>
                    <h5>{price}</h5>
                </div>
            
        </div>
    );
};

export default FastFood;