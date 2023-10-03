import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

import Icon from "@/Components/Icon";

import { WiMoonFull } from "react-icons/wi";
import {
  FaPlay,
  FaHandshake,
  FaQuoteRight,
  FaSquareFull,
} from "react-icons/fa";
import { BsSquareFill } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { MdReduceCapacity } from "react-icons/md";
import { GiSofa } from "react-icons/gi";
import {
  BsCurrencyDollar,
  BsShareFill,
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

import Slide from "@/Components/Slide";
import backGroundSuffle from "@/shared/svg/backgroundsuffle.svg";
import SlideProduct from "@/Components/SlideProduct";

const titulo = "We Can Teach You Take Life Control";
const subtitulo =
  "Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands.";
const tagCache = "#1 Life Coach in the world";

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
    </>
  );
};

export default HomeHero;
