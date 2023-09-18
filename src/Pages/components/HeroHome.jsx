import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

import Icon from '@/Components/Icon';

import { WiMoonFull } from 'react-icons/wi';
import {
  FaPlay,
  FaHandshake,
  FaQuoteRight,
  FaSquareFull,
} from 'react-icons/fa';
import { BsSquareFill } from 'react-icons/bs';
import { FcCheckmark } from 'react-icons/fc';
import { MdReduceCapacity } from 'react-icons/md';
import { GiSofa } from 'react-icons/gi';
import {
  BsCurrencyDollar,
  BsShareFill,
  BsArrowLeft,
  BsArrowRight,
} from 'react-icons/bs';
import { FaYoutube } from 'react-icons/fa';

import Slide from '@/Components/Slide';
import backGroundSuffle from '@/shared/svg/backgroundsuffle.svg';
import SlideProduct from '@/Components/SlideProduct';

const titulo = 'We Can Teach You Take Life Control';
const subtitulo =
  'Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands.';
const tagCache = '#1 Life Coach in the world';

const HomeHero = () => {
  return (
    <>
      <section className="hero pb-5">
        {/* <Container className="hero__body">
          <Row>
            <Col className="align-items-center pb-3 text-black">
              <div className="tag tag--primary rounded-pill w-25">
                <span className="tag-title--text d-flex align-items-center gap-1">
                  <Icon icon={WiMoonFull} size={1.5} color={'primary'} />
                  {tagCache}
                </span>
              </div>
            </Col>
            <Col xs={11} md={8} lg={6}>
              <h1 className="main home__title hero-title text-start fw-bold">
                {titulo}
              </h1>
              <p className="home__subtitle text-start pb-2 w-75">{subtitulo}</p>
              <div className="d-flex gap-5">
                <Link
                  to="/catalogo"
                  className="btn btn-primary text-white home__button"
                >
                  Learn More | &rarr;
                </Link>
                <button className="text-white soft-button soft-button--success">
                  <Icon icon={FaPlay} size={1.6} color={'success'} />
                </button>
              </div>
            </Col>
          </Row>
        </Container> */}
        <div className="hero__shadow" />
        <div className="hero__image" />
      </section>
      <Container className="pt-5 pb-5">
        <Row className="pb-5 row-cols-2 row-cols-md-4">
          <Col>
            <Card className="border-0 ">
              <CardBody className="card-motivation card-motivation--primary">
                <Col md={3} lg={3}>
                  <h5 className="card-motivation-number text-end fw-bold fs-1">
                    {'01'}
                  </h5>
                </Col>
                <Col>
                  <div className="ms-3">
                    <h5 className="card-motivation-title--primary pt-4 text-uppercase fs-6">
                      {'BEING HAPPY'}
                    </h5>
                    <h5 className="fw-bold">{'Enjoy your life'}</h5>
                  </div>
                </Col>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 ">
              <CardBody className="card-motivation card-motivation--primary">
                <Col md={3} lg={3}>
                  <h5 className="card-motivation-number text-end fw-bold fs-1">
                    {'02'}
                  </h5>
                </Col>
                <Col>
                  <div className="ms-3">
                    <h5 className="card-motivation-title--primary pt-4 text-uppercase fs-6">
                      {'BEING HAPPY'}
                    </h5>
                    <h5 className="fw-bold">{'Enjoy your life'}</h5>
                  </div>
                </Col>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 ">
              <CardBody className="card-motivation card-motivation--primary">
                <Col md={3} lg={3}>
                  <h5 className="card-motivation-number text-end fw-bold fs-1">
                    {'03'}
                  </h5>
                </Col>
                <Col>
                  <div className="ms-3">
                    <h5 className="card-motivation-title--primary pt-4 text-uppercase fs-6">
                      {'BEING HAPPY'}
                    </h5>
                    <h5 className="fw-bold">{'Enjoy your life'}</h5>
                  </div>
                </Col>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 ">
              <CardBody className="card-motivation card-motivation--primary">
                <Col md={3} lg={3}>
                  <h5 className="card-motivation-number text-end fw-bold fs-1">
                    {'04'}
                  </h5>
                </Col>
                <Col>
                  <div className="ms-3">
                    <h5 className="card-motivation-title--primary pt-4 text-uppercase fs-6">
                      {'BEING HAPPY'}
                    </h5>
                    <h5 className="fw-bold">{'Enjoy your life'}</h5>
                  </div>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col>
            <img src="https://via.placeholder.com/500x500.png" />
          </Col>
          <Col>
            <Col className="align-items-center pb-3 text-black">
              <div className="tag tag--success rounded-pill w-50">
                <span className="tag-title--text-success d-flex align-items-center text-uppercase gap-1">
                  <Icon icon={WiMoonFull} size={1.5} color={'success'} />
                  <span className="tag-title">why life coaching</span>
                </span>
              </div>
            </Col>
            <Row>
              <h1 className="fw-bold">Push Your Life To a New Level</h1>
              <p className="home__subtitle text-start pb-2">
                Pleasure and praising pain was born and I will give you a
                complete account of the system, and expound the actual teachings
                of the great explorer of the truth, the master-builder of human
                happiness.
              </p>
            </Row>
            <Row>
              <Col className="col-1 col-md-1">
                <div className="tag tag--success w-25 h-25">
                  <span className="d-flex align-items-center">
                    <Icon icon={FcCheckmark} size={2.5} color={'success'} />
                  </span>
                </div>
              </Col>
              <Col className="ps-0">
                <span className="fw-bold">Don’t Know Where to Go?</span>
                <p className="home__subtitle text-start pb-2">
                  Pleasure and praising pain was born and I will give you a
                  complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="col-1 col-md-1">
                <div className="tag tag--success w-25 h-25">
                  <span className="d-flex align-items-center">
                    <Icon icon={FcCheckmark} size={2.5} color={'success'} />
                  </span>
                </div>
              </Col>
              <Col className="ps-0">
                <span className="fw-bold">We’ll Sit and Talk</span>
                <p className="home__subtitle text-start pb-2">
                  Pleasure and praising pain was born and I will give you a
                  complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="col-1 col-md-1">
                <div className="tag tag--success w-25 h-25">
                  <span className="d-flex align-items-center">
                    <Icon icon={FcCheckmark} size={2.5} color={'success'} />
                  </span>
                </div>
              </Col>
              <Col className="ps-0">
                <span className="fw-bold">Find The Solution</span>
                <p className="home__subtitle text-start pb-2">
                  Pleasure and praising pain was born and I will give you a
                  complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness.
                </p>
              </Col>
            </Row>
            <Row>
              <Link
                to="/contactus"
                className="btn btn-primary text-white home__button rounded"
              >
                Contact Us | &rarr;
              </Link>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="pb-5">
        <Row className="pb-5 justify-content-center">
          <Col xs={4}>
            <p>
              <h2 className="fs-1 fw-bold">Coaching Areas Of</h2>
            </p>
            <p>
              <h2 className="fs-1 fw-bold">Our Center</h2>
            </p>
          </Col>
          <Col xs={5}>
            <p className="home__subtitle text-start pb-2">
              Athlete’s, Professionals and Businesses All Hire Coaches To Help
              Them Improve their Health, Performance, Relationships & Achieve
              their Goals. You Can Too!
            </p>
          </Col>
        </Row>
        <Row className="row-cols-3 d-flex justify-content-center pb-5 gap-4">
          <Card className="card-area-treinamento border-0 rounded ">
            <CardBody className="cardbody-area-treinamento cardbody-area-treinamento--primary shadow">
              <Container>
                <Row>
                  <Col sm={1} lg={4} className="m-2 mt-3 align-start">
                    <CardBody className="cardbody-area-treinamento-icon rounded soft-button soft-button--primary">
                      <Icon icon={FaHandshake} size={2.5} color={'primary'} />
                    </CardBody>
                  </Col>
                  <Row>
                    <h5 className="text-start fs-4 fw-bold pt-3 pb-3 mb-0">
                      Personal Coach
                    </h5>
                  </Row>
                  <Row>
                    <p className="subtitle-cardbody-treinamento fs-6 pb-3">
                      Pleasure and praising pain was born and I will give you a
                      complete acc the system, and expound
                    </p>
                  </Row>
                  <Row>
                    <div>
                      <Link to="/catalogo" className=" text-info">
                        Read More | &rarr;
                      </Link>
                    </div>
                  </Row>
                </Row>
              </Container>
            </CardBody>
          </Card>
          <Card className="card-area-treinamento border-0 rounded ">
            <CardBody className="cardbody-area-treinamento cardbody-area-treinamento--primary shadow">
              <Container>
                <Row>
                  <Col sm={1} lg={4} className="m-2 mt-3 align-start">
                    <CardBody className="cardbody-area-treinamento-icon rounded soft-button soft-button--primary">
                      <Icon icon={FaHandshake} size={2.5} color={'primary'} />
                    </CardBody>
                  </Col>
                  <Row>
                    <h5 className="text-start fs-4 fw-bold pt-3 pb-3 mb-0">
                      Retirement Care
                    </h5>
                  </Row>
                  <Row>
                    <p className="subtitle-cardbody-treinamento fs-6 pb-3">
                      Pleasure and praising pain was born and I will give you a
                      complete acc the system, and expound
                    </p>
                  </Row>
                  <Row>
                    <div>
                      <Link to="/catalogo" className=" text-info">
                        Read More | &rarr;
                      </Link>
                    </div>
                  </Row>
                </Row>
              </Container>
            </CardBody>
          </Card>
          <Card className="card-area-treinamento border-0 rounded ">
            <CardBody className="cardbody-area-treinamento cardbody-area-treinamento--primary shadow">
              <Container>
                <Row>
                  <Col sm={1} lg={4} className="m-2 mt-3 align-start">
                    <CardBody className="cardbody-area-treinamento-icon rounded soft-button soft-button--primary">
                      <Icon icon={FaHandshake} size={2.5} color={'primary'} />
                    </CardBody>
                  </Col>
                  <Row>
                    <h5 className="text-start fs-4 fw-bold pt-3 pb-3 mb-0">
                      Business Coach
                    </h5>
                  </Row>
                  <Row>
                    <p className="subtitle-cardbody-treinamento fs-6 pb-3">
                      Pleasure and praising pain was born and I will give you a
                      complete acc the system, and expound
                    </p>
                  </Row>
                  <Row>
                    <div>
                      <Link to="/catalogo" className=" text-info">
                        Read More | &rarr;
                      </Link>
                    </div>
                  </Row>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Row>
        <Row lg={8}>
          <Col>
            <Container className="container-area-bicolor pe-0">
              <Card className="border-0 rounded">
                <CardBody className="cardbody-area-bicolor p-0 d-flex">
                  <Col className="quadro-1 bg-primary p-0 rounded-start d-flex align-items-center">
                    <Container className="container-quadro-1-bicolor">
                      <Col className="pb-3">
                        <h2 className="main home__title fw-bold">
                          Become a Friend to Your Child not an Enemy!
                        </h2>
                      </Col>
                      <Row>
                        <p className="d-flex align-items-center gap-3">
                          <span className="fs-5">Need Advice? </span>
                          <Link
                            to="/catalogo"
                            className="link-direct-bicolor btn btn-secondary text-white home__button rounded border border-secundary bg-transparent"
                          >
                            Make An Appointment
                          </Link>
                        </p>
                      </Row>
                    </Container>
                  </Col>
                  <Col
                    sm={6}
                    lg={5}
                    className="quadro-2 d-blocks rounded-end"
                  ></Col>
                </CardBody>
              </Card>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container fluid className="container-slide">
        <Container className="container-slide">
          <Row className="pb-5">
            <Col>
              <p>
                <h2 className="fw-bold text-white">Our Most Popular Courses</h2>
              </p>
              <p className="home__subtitle text-start pb-2 text-white">
                Athlete’s, Professionals and Businesses All Hire Coaches To Help
                Them Improve their Health, Performance, Relationships & Achieve
                their Goals. You Can Too!
              </p>
            </Col>
            <Col md={6} lg={6} className="position-relative">
              <div className="position-absolute bottom-0 end-0">
                <div className="controle-hero-slide d-flex flex-row align-items-center pt-5 gap-2">
                  <span className="seta-esquerda-controle bg-white border border-primary rounded-pill d-flex align-items-center justify-content-center">
                    <Icon
                      className="fw-bold"
                      icon={BsArrowLeft}
                      size={2.5}
                      color={'primary'}
                    />
                  </span>
                  <span className="seta-direita-controle bg-primary border border-primary rounded-pill d-flex align-items-center justify-content-center">
                    <Icon icon={BsArrowRight} size={2.5} color={'white'} />
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container md={4} lg={4} className="d-flex justify-content-center pb-5">
          {/*<Card className="border-0 rounded">
            <CardBody className="soft-button soft-button--secondary">
              <button className="text-white tag soft-button soft-button--success rounded-pill">
                <Icon icon={BsCurrencyDollar} size={2.5} color={'danger'} /> 120
              </button>
            </CardBody>
            <CardBody className="soft-button soft-button--info">
              <Container>
                <Row>
                  <Row>
                    <h5 className="text-start fs-6 text-uppercase">
                      Basic Course
                    </h5>
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
              </Container>
            </CardBody>
          </Card>
          <Card className="border-0 rounded">
            <CardBody className="soft-button soft-button--secondary">
              <button className="text-white tag soft-button soft-button--success rounded-pill">
                {/* <Icon path={mdiCurrencyUsd} size={1} color="success" /> 120
              </button>
            </CardBody>
            <CardBody className="soft-button soft-button--info">
              <Container>
                <Row>
                  <Row>
                    <h5 className="text-start fs-6 text-uppercase">
                      Basic Course
                    </h5>
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
              </Container>
            </CardBody>
          </Card>
          <Card className="border-0 rounded">
            <CardBody className="soft-button soft-button--secondary">
              <button className="text-white tag soft-button soft-button--success rounded-pill">
                {/* <Icon path={mdiCurrencyUsd} size={1} color="success" /> 120 
            </CardBody>
            <CardBody className="soft-button soft-button--info">
              <Container>
                <Row>
                  <Row>
                    <h5 className="text-start fs-6 text-uppercase">
                      Basic Course
                    </h5>
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
              </Container>
            </CardBody>
          </Card>  */}
          <SlideProduct />
        </Container>
      </Container>
      <Container className="pb-5 pt-5">
        <Row className="pb-4 justify-content-center gap-5">
          <Row md={4} lg={4} className="justify-content-center">
            <button className="tag tag--primary text-uppercase rounded-pill">
              <Icon icon={WiMoonFull} size={1.5} color={'danger'} />
              <span className="tag-title text-uppercase">Testimonials</span>
            </button>
          </Row>
          <Row className="text-center">
            <p>
              <h1 className="fw-bold">What People Are Saying About Us</h1>
            </p>
          </Row>
        </Row>

        <Row className="d-flex flex-column align-items-center">
          <Col className="coluna-apresentador">
            <Card className="card-apresentador border-0 rounded">
              <CardBody className="cardbody-apresentador p-0 bg-white shadow">
                <img
                  src={backGroundSuffle}
                  className="img-background-apresentador"
                />
                <Container className="">
                  <Row className="row-apresentador">
                    <Col className="quadro1-apresentador d-flex flex-column align-items-start justify-content-center ps-5">
                      <div className="pb-5 gap-2 d-flex flex-column align-items-start">
                        <Icon
                          icon={FaQuoteRight}
                          size={4.5}
                          color={'primary'}
                        />{' '}
                        <p>
                          Pleasure and praising pain was born and I will give
                          you a complete account of the system, and expound the
                          actual teachings of the great explorer of the truth,
                          the master- builder of human happiness.
                        </p>
                        <div className="container-autor gap-0">
                          <div className="nome-autor d-flex align-items-center gap-4">
                            <Icon
                              icon={FaSquareFull}
                              size={3}
                              color={'success-secundary'}
                            />{' '}
                            <div className="d-flex flex-column">
                              <span className="fw-bold">Jhon Khan Smith</span>
                            </div>
                          </div>
                          <div className="nome-autor-secondary d-flex align-items-center gap-4">
                            <Icon
                              icon={FaSquareFull}
                              size={3}
                              color={'success-secundary'}
                            />{' '}
                            <div className="d-flex flex-column">
                              <span className="">Jhon Khan Smith</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="controle-hero-slide d-flex flex-row align-items-center pt-5 gap-2">
                        <span className="seta-esquerda-controle bg-white border border-primary rounded-pill d-flex align-items-center justify-content-center">
                          <Icon
                            className="fw-bold"
                            icon={BsArrowLeft}
                            size={2.5}
                            color={'primary'}
                          />
                        </span>
                        <span className="seta-direita-controle bg-primary border border-primary rounded-pill d-flex align-items-center justify-content-center">
                          <Icon
                            icon={BsArrowRight}
                            size={2.5}
                            color={'white'}
                          />
                        </span>
                      </div>
                    </Col>
                    <Col className="quadro2-apresentador">
                      <Slide />
                    </Col>
                  </Row>
                </Container>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="pb-5">
        <Row className="pb-5 justify-content-center">
          <Col>
            <Row className="justify-content-start w-50">
              <button className="tag tag--primary text-uppercase rounded-pill">
                <Icon icon={WiMoonFull} size={1.5} color={'danger'} />
                <span className="tag-title">SKILLED LIFE COACHES</span>
              </button>
            </Row>
            <Row className="text-start">
              <p>
                <h2 className="fw-bold">
                  Introduce Our Life Coaches That Change Your Life
                </h2>
              </p>
            </Row>
          </Col>
          <Col>
            <Row className="">
              <p className="home__subtitle d-flex align-items-end">
                Athlete’s, Professionals and Businesses All Hire Coaches To Help
                Them Improve their Health, Performance, Relationships & Achieve
                their Goals. You Can Too!
              </p>
            </Row>
          </Col>
        </Row>

        <Row
          md={4}
          lg={4}
          className="d-flex justify-content-center pb-5 position-relative"
        >
          <Card className="border-0 rounded p-0 rounded card-share">
            <CardBody className="tag-button p-0 rounded">
              <img
                src="https://via.placeholder.com/325x425.png"
                alt=""
                className="w-100 rounded"
              />
              <button className="tag tag-button-share bg-primary rounded-pill position-absolute top-0 start-0 ms-3 mt-3">
                <Icon icon={BsShareFill} size={2.5} color={'white'} />
              </button>
              <CardBody className="rounded text-white position-absolute bottom-0 mb-3 w-90 cardbody-share-information">
                <p className="text-uppercase mb-2">Carmen Alvarado</p>
                <p className="mb-1">Eros vestibulum</p>
              </CardBody>
            </CardBody>
          </Card>
          <Card className="border-0 rounded p-0 rounded card-share">
            <CardBody className="tag-button p-0 rounded">
              <img
                src="https://via.placeholder.com/325x425.png"
                alt=""
                className="w-100 rounded"
              />
              <button className="tag tag-button-share bg-primary rounded-pill position-absolute top-0 start-0 ms-3 mt-3">
                <Icon icon={BsShareFill} size={2.5} color={'white'} />
              </button>
              <CardBody className="rounded text-white position-absolute bottom-0 mb-3 w-90 cardbody-share-information">
                <p className="text-uppercase mb-2">Carmen Alvarado</p>
                <p className="mb-1">Eros vestibulum</p>
              </CardBody>
            </CardBody>
          </Card>
          <Card className="border-0 rounded p-0 rounded card-share">
            <CardBody className="tag-button p-0 rounded">
              <img
                src="https://via.placeholder.com/325x425.png"
                alt=""
                className="w-100 rounded"
              />
              <button className="tag tag-button-share bg-primary rounded-pill position-absolute top-0 start-0 ms-3 mt-3">
                <Icon icon={BsShareFill} size={2.5} color={'white'} />
              </button>
              <CardBody className="rounded text-white position-absolute bottom-0 mb-3 w-90 cardbody-share-information">
                <p className="text-uppercase mb-2">Carmen Alvarado</p>
                <p className="mb-1">Eros vestibulum</p>
              </CardBody>
            </CardBody>
          </Card>
          <Card className="border-0 rounded p-0 rounded card-share">
            <CardBody className="tag-button p-0 rounded">
              <img
                src="https://via.placeholder.com/325x425.png"
                alt=""
                className="w-100 rounded"
              />
              <button className="tag tag-button-share bg-primary rounded-pill position-absolute top-0 start-0 ms-3 mt-3">
                <Icon icon={BsShareFill} size={2.5} color={'white'} />
              </button>
              <CardBody className="rounded text-white position-absolute bottom-0 mb-3 w-90 cardbody-share-information">
                <p className="text-uppercase mb-2">Carmen Alvarado</p>
                <p className="mb-1">Eros vestibulum</p>
              </CardBody>
            </CardBody>
          </Card>
          {/* <Card className="border-0 rounded">
            <CardBody className="soft-button soft-button--secondary">
              <Row>
                <Row>
                  <button className="text-white tag soft-button soft-button--info rounded-pill"></button>
                </Row>
                <Row>
                  <CardBody className="bg-black rounded text-white">
                    <p>Carmen Alvarado</p>
                    <p>Eros vestibulum</p>
                  </CardBody>
                </Row>
              </Row>
            </CardBody>
          </Card> */}
        </Row>
        <Col className="position-relative justify-content-center d-flex">
          <div className="controle-hero-slide d-flex flex-row align-items-center pt-5 gap-2">
            <span className="seta-esquerda-controle bg-white border border-primary rounded-pill d-flex align-items-center justify-content-center">
              <Icon
                className="fw-bold"
                icon={BsArrowLeft}
                size={2.5}
                color={'primary'}
              />
            </span>
            <span className="seta-direita-controle bg-primary border border-primary rounded-pill d-flex align-items-center justify-content-center">
              <Icon icon={BsArrowRight} size={2.5} color={'white'} />
            </span>
          </div>
        </Col>
      </Container>
      <Container className="pb-5 card-video">
        <Row className="pb-5 justify-content-center">
          <Row md={4} lg={4} className="justify-content-center">
            <span className="tag tag--primary rounded-pill rounded-pill">
              <Icon icon={WiMoonFull} size={1.5} color={'danger'} />
              <span className="tag-title">BEST FREE VIDEOS</span>
            </span>
          </Row>
          <Row className="text-center">
            <p>
              <h2 className="fw-bold">Watch Free Tutorials from Our Coaches</h2>
            </p>
          </Row>
        </Row>
        {/* <Row lg={8}>
          <Col>
            <Card className="border-0 rounded">
              <CardBody className="soft-button soft-button--info">
                <Col className="bg-primary">
                  {' '}
                  <h1 className="main home__title fw-bold">
                    Become a Friend to Your Child not an Enemy!
                  </h1>
                  <p>
                    Need Advice?{' '}
                    <Link
                      to="/catalogo"
                      className="btn btn-secondary text-white home__button rounded border border-secundary bg-transparent"
                    >
                      Make An Appointment
                    </Link>
                  </p>
                </Col>
                <Col sm={6} lg={5} className="bg-light d-blocks">
                  VÍDEO{' '}
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row> */}
        <Row>
          <Col className="d-flex flex-column align-items-end gap-3">
            <div className="position-relative bg-white">
              <img
                src="https://via.placeholder.com/200x200.png"
                className="rounded"
              />
              <span className="icon-video-youtube tag-video rounded-circle bg-white position-absolute top-0 end-0 me-3 mt-3">
                <Icon icon={FaYoutube} size={2.5} color={'green'} />
              </span>
            </div>

            <div className="position-relative bg-white">
              <img
                src="https://via.placeholder.com/200x200.png"
                className="rounded"
              />
              <span className="icon-video-youtube tag-video rounded-circle bg-white position-absolute top-0 end-0 me-3 mt-3">
                <Icon icon={FaYoutube} size={2.5} color={'green'} />
              </span>
            </div>
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <div className="position-relative bg-white w-100 d-flex flex-column align-items-center justify-content-center">
              <img
                src="https://via.placeholder.com/450x400.png"
                className="w-100 rounded"
              />
              <span className="icon-video-youtube tag-video rounded-circle bg-white position-absolute">
                <Icon icon={FaYoutube} size={2.5} color={'green'} />
              </span>
            </div>
          </Col>
          <Col className="d-flex flex-column align-items-start gap-3">
            <div className="position-relative bg-white">
              <img
                src="https://via.placeholder.com/200x200.png"
                className="rounded"
              />
              <span className="icon-video-youtube tag-video rounded-circle bg-white position-absolute top-0 end-0 me-3 mt-3">
                <Icon icon={FaYoutube} size={2.5} color={'green'} />
              </span>
            </div>
            <div className="position-relative bg-white">
              <img
                src="https://via.placeholder.com/200x200.png"
                className="rounded"
              />
              <span className="icon-video-youtube tag-video rounded-circle bg-white position-absolute top-0 end-0 me-3 mt-3">
                <Icon icon={FaYoutube} size={2.5} color={'green'} />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="pb-5">
        <Col>
          <Row md={4} lg={4} className=" d-flex justify-content-center pb-5">
            <Col className="pb-5 justify-content-center">
              <Col>
                <Row md={4} lg={4} className="justify-content-start">
                  <button className="tag soft-button soft-button--info text-uppercase rounded-pill">
                    <Icon icon={WiMoonFull} size={1.5} color={'danger'} />
                    <span className="tag-title">BEST FREE VIDEOS</span>
                  </button>
                </Row>
                <Row className="text-start">
                  <p>
                    <h2 className="fw-bold">Something from ourlatest blog.</h2>
                  </p>
                </Row>
              </Col>
              <Col>
                <Row className="text-center">
                  <p className="home__subtitle text-start pb-2">
                    Improve efficiency, provide a better customer experience
                    with modern technology services around the world. Our
                    skilled
                  </p>
                </Row>
                <Row className="text-center">
                  <Link
                    to="/catalogo"
                    className="btn btn-info text-white home__button rounded"
                  >
                    View All | &rarr;
                  </Link>
                </Row>
              </Col>
            </Col>
            <Card className="border-0 rounded">
              <CardBody className="soft-button soft-button--secondary">
                <Row>
                  <Row>
                    <CardBody className="bg-primary rounded text-black">
                      <p>25 JUN</p>
                      <p>2021</p>
                    </CardBody>
                  </Row>
                  <Row>
                    <CardBody className="bg-white rounded text-black">
                      <p>We would love to share a</p>
                      <p>similar experience</p>
                      <Row>
                        <div>
                          <Link to="/catalogo" className=" text-info">
                            Read More | &rarr;
                          </Link>
                          <button className="text-white tag soft-button soft-button--success rounded-pill">
                            Digital
                          </button>
                        </div>
                      </Row>
                    </CardBody>
                  </Row>
                </Row>
              </CardBody>
            </Card>
            <Card className="border-0 rounded">
              <CardBody className="soft-button soft-button--secondary">
                <Row>
                  <Row>
                    <CardBody className="bg-primary rounded text-black">
                      <p>25 JUN</p>
                      <p>2021</p>
                    </CardBody>
                  </Row>
                  <Row>
                    <CardBody className="bg-white rounded text-black">
                      <p>In this context our main</p>
                      <p>approach was to build</p>
                      <Row>
                        <div>
                          <Link to="/catalogo" className=" text-info">
                            Read More | &rarr;
                          </Link>
                          <button className="text-white tag soft-button soft-button--success rounded-pill">
                            Digital
                          </button>
                        </div>
                      </Row>
                    </CardBody>
                  </Row>
                </Row>
              </CardBody>
            </Card>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default HomeHero;
