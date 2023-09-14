import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper';
import { Container, Card, CardBody, Row, Col } from 'reactstrap';

const SlideProduct = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper content-slide-product"
      >
        {/* <SwiperSlide className="border-0 rounded bg-white product-slide">
          <CardBody className="soft-button soft-button--secondary">
            <CardBody className="content-img-slide-product">
              <img
                className="img-slide-product"
                src="https://via.placeholder.com/300x300.png"
              />
              <button className="text-white tag soft-button soft-button--success rounded-pill">
                <Icon icon={BsCurrencyDollar} size={2.5} color={'danger'} /> 120
              </button>
            </CardBody>
            <Row>
              <Row>
                <h5 className="text-start fs-6 text-uppercase">Basic Course</h5>
              </Row>
              <Row>
                <h5 className="text-start fs-4 fw-bold pt-2 pb-3">
                  Strong start
                </h5>
              </Row>
              <Row>
                <h5 className="fs-6">
                  Pleasure and praising pain was born and I will give you a
                  complete acc the system, and expound
                </h5>
              </Row>
              <Row>
                <div>
                  <Link to="/catalogo" className="text-info">
                    Read More | &rarr;
                  </Link>
                </div>
              </Row>
            </Row>
          </CardBody>
          
                <Row>
                  
                  
                  
                  
                </Row>
        </SwiperSlide>
        <SwiperSlide className="border-0 rounded bg-white product-slide">
          <CardBody className="soft-button soft-button--secondary">
            <CardBody className="content-img-slide-product">
              <img
                className="img-slide-product"
                src="https://via.placeholder.com/300x300.png"
              />
            </CardBody>

            <button className="text-white tag soft-button soft-button--success rounded-pill">
              <Icon icon={BsCurrencyDollar} size={2.5} color={'danger'} /> 120
            </button>
          </CardBody>
        </SwiperSlide>
        <SwiperSlide>
          <CardBody className="soft-button soft-button--secondary">
            <CardBody className="content-img-slide-product">
              <img
                className="img-slide-product"
                src="https://via.placeholder.com/300x300.png"
              />
            </CardBody>

            <button className="text-white tag soft-button soft-button--success rounded-pill">
              <Icon icon={BsCurrencyDollar} size={2.5} color={'danger'} /> 120
            </button>
          </CardBody>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default SlideProduct;
