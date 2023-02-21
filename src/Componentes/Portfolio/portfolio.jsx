import React from 'react';
import './portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Ecommerce from '../../img/ecommerce.png';
import Sidebar from '../../img/sidebar.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';

const portfolio = () => {
  return (
    <div className="portfolio">

        <span>Recent Projects</span>
        <span>Portfolio</span>



        <Swiper>

            <SwiperSlide>
                <img src="" alt="" />
            </SwiperSlide>


        </Swiper>
    </div>
  )
}

export default portfolio