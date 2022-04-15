import React from 'react';
import dinner1 from '../../images/dinner/dinner1.png'
import dinner2 from '../../images/dinner/dinner2.png'
import dinner3 from '../../images/dinner/dinner3.png'
import dinner4 from '../../images/dinner/dinner4.png'
import dinner5 from '../../images/dinner/dinner5.png'
import dinner6 from '../../images/dinner/dinner6.png'
import SignelDeaner from '../Header/Deaner/SignelDeaner';
const dinners = [
    {name:"pasta",deatil: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, impedit!', price: 20, id: 1, img: dinner1},
    {name:"tomato",deatil: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, impedit!', price: 20, id: 2, img: dinner2},
    {name:"barger",deatil: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, impedit!', price: 20, id: 3, img: dinner3},
    {name:"biriyani",deatil: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, impedit!', price: 20, id: 4, img: dinner4},
    {name:"kalavuna",deatil: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, impedit!', price: 20, id: 5, img: dinner5},
    {name:"chicen",deatil: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, impedit!', price: 20, id: 6, img: dinner6}
]
const Deaner = () => {
    return (
        <div className='row'>
           {
            dinners.map(dinner=>< SignelDeaner
            key={dinner.id}
            dinner={dinner}
            ></SignelDeaner>)
           }
        </div>
    );
};

export default Deaner;