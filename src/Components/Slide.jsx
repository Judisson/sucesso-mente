import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Mousewheel, Pagination } from 'swiper';
import { Container } from 'reactstrap';

const Slide = () => {
  return (
    <Container className="container-slide-swiper">
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        mousewheel={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://via.placeholder.com/300x300.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/300x300.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/300x300.png" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Slide;
