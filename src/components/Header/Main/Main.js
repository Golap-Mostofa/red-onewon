import React from 'react';
import './Main.css'
import banar from '../../../images/bannerbackground.png'
import Product from '../Product/Product';

const Main = () => {
    return (
        <div>
            <div className='mx-auto mt-5 border banner-part'>
                <img className='w-100 block' src={banar} alt="" />
                <h2 className='heading'>Food Delivery Toronto - Foodpanda Food Delivery</h2>
                <div className="input-group w-25 mb-3 bottomleft  rounded-pill ">
                    <input type="text" className="form-control" aria-describedby="button-addon2" />
                    <button className="rounded bg-success" id="button-addon2">Search</button>
                </div>
            </div>
           <Product></Product>
        </div>
    );
};

export default Main;