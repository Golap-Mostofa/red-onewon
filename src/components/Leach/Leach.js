import React from 'react';
import leach1 from '../../images/lunch/lunch1.png'
import leach2 from '../../images/lunch/lunch2.png'
import leach3 from '../../images/lunch/lunch3.png'
import leach4 from '../../images/lunch/lunch4.png'
import leach5 from '../../images/lunch/lunch5.png'
import leach6 from '../../images/lunch/lunch6.png'
import SignelLunch from '../Header/SignelLunch/SignelLunch';
const lunchs = [
    {detail: 'Lorem ipsum dolor sit amet consectetur.', name:'Healdthy meal',price:10.6,id:1,img:leach1},
    {detail: 'Lorem ipsum dolor sit amet consectetur.', name:'Fridy chicen banto',price:9.6,id:2,img:leach2},
    {detail: 'Lorem ipsum dolor sit amet consectetur.', name:'Tragoon rubiya',price:11.6,id:3,img:leach3},
    {detail: 'Lorem ipsum dolor sit amet consectetur.', name:'Healdthy meal',price:8.6,id:4,img:leach4},
    {detail: 'Lorem ipsum dolor sit amet consectetur.', name:'Beef Styeef',price:11.6,id:5,img:leach5},
    {detail: 'Lorem ipsum dolor sit amet consectetur.', name:'Healdthy meal',price:7.6,id:6,img:leach6},
]

const Leach = () => {
    return (
        <div className='row'>
           
            {
                lunchs.map(lunch=><SignelLunch
                key={lunch.id}
                lunch={lunch}
                ></SignelLunch>)
            }
        </div>
    );
};

export default Leach;