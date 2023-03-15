import React from 'react';
import './portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Ecommerce from '../../img/ecommerce.png';
import Sidebar from '../../img/sidebar.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
import 'swiper/css'

const portfolio = () => {
  return (
    <div className="portfolio">

      <span>Recent Projects</span>
      <span>Portfolio</span>



      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >

        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default portfolio