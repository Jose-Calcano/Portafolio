import React from 'react'
import './Servicios.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './resume.pdf'


const Servicios = () => {
  return (
    <div className="servicios">

        <div className="awesome">
        <span> My awesome </span>
        <span>services</span>
        <span>
            Descripcion 2 <br/> efbwbfwbef
        </span>
        <a href={Resume} download>
        <button className='button s-button'> Download CV</button>
        </a>
        <div className='blur s-blurl' style={{background: '#ABF1FF94'}}></div>
        </div>
        <div className="cards">

            <div style={{left: '14rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {'Figma, Sketch, Photoshop, Adobe'}
                />
            </div>
        <div style={{top:'12rem' , left:'-4rem'}}>
            <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={'HTML, CSS, Javascript, React'}
            />
        </div>
        <div style={{top:'19rem' , left:'12rem'}}>
         <Card
            emoji={Humble}
            heading={'UI/UX'}
            detail={
                'prueba'
            }
         />
        </div>
        <div className='blur s-blur2' style={{background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Servicios