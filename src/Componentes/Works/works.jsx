import React from 'react'
import './works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'



const works = () => {
  return (
    <div className="works">
        <div className="awesome">
        <span> Works for All these </span>
        <span>Brands & Clients </span>
        <span>
            Descripcion 2 
            <br/> 
            efbwbfwbef 
            <br/>
            efbwbfwbef  efbwbfwbef 
            <br/>
            efbwbfwbef  efbwbfwbef  efbwbfwbef 

        </span>

        <button className='button s-button'> Hire Me </button>
        <div className='blur s-blurl' style={{background: '#ABF1FF94'}}></div>
        </div>

        <div className="w-right">
        <div className="w-mainCircle">
            <div className="w-secCircle">
                <img src={Upwork} alt=''/>
            </div>
            <div className="w-secCircle">
                <img src={Fiverr} alt=''/>
            </div>
            <div className="w-secCircle">
                <img src={Amazon} alt=''/>
            </div>{" "}
            <div className="w-secCircle">
                <img src={Shopify} alt=''/>
            </div>
            <div className="w-secCircle">
                <img src={Facebook} alt=''/>
            </div>
         </div>
         <div className="w-backCircle blueCircle"></div>
         <div className="w-backCircle yellowCircle"></div>
     </div>
</div>
  );
};

export default works