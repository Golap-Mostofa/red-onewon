import React from 'react';
import breakfast1 from '../../../images/breakfast/breakfast1.png'
import breakfast2 from '../../../images/breakfast/breakfast2.png'
import breakfast3 from '../../../images/breakfast/breakfast3.png'
import breakfast4 from '../../../images/breakfast/breakfast4.png'
import breakfast5 from '../../../images/breakfast/breakfast5.png'
import breakfast6 from '../../../images/breakfast/breakfast6.png'
import FastFood from '../FastFood/FastFood';

const breakfasts = [
    {name:"pasta",deatil: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, impedit!', price: 20, id: 1, img: breakfast1},
    {name:"tomato",deatil: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, impedit!', price: 20, id: 2, img: breakfast2},
    {name:"barger",deatil: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, impedit!', price: 20, id: 3, img: breakfast3},
    {name:"biriyani",deatil: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, impedit!', price: 20, id: 4, img: breakfast4},
    {name:"kalavuna",deatil: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, impedit!', price: 20, id: 5, img: breakfast5},
    {name:"chicen",deatil: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, impedit!', price: 20, id: 6, img: breakfast6}
]
const SigngelProduct = () => {
   
    return (
        <div className='row'>
          
         {
            breakfasts.map(breakfast=><FastFood
           
            breakfast={breakfast}
            
            ></FastFood>)
         }
        </div>
    );
};

export default SigngelProduct;