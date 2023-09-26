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
      <Container className="pt-5 pb-5">
        <div>
          <h2 className="text-uppercase text-center">
            Construindo Mentes de Sucesso
          </h2>
          <h4 className="text-uppercase">BEM-VINDOS!</h4>
          <p>
            Você já se perguntou por que algumas pessoas são bem-sucedidas em
            suas carreiras e em suas vidas pessoais, enquanto outras parecem
            estar sempre lutando? A resposta pode estar em sua Mentalidade. Ter
            uma Mentalidade de Sucesso é fundamental para alcançar seus
            objetivos em todas as áreas da vida!
          </p>

          <p>
            Nossa Missão é ajudar você com esse treinamento de Desenvolvimento
            Pessoal que foi projetado para capacitar indivíduos que desejam
            alcançar o sucesso em todas as áreas da vida, ao fortalecer sua
            mentalidade. Acreditamos que cada indivíduo possui a capacidade de
            moldar sua própria realidade. O curso abordará técnicas
            cientificamente comprovadas para construir uma mentalidade positiva,
            resiliente e focada, proporcionando aos participantes as ferramentas
            necessárias para superar desafios, maximizar o potencial e alcançar
            seus objetivos de forma consistente.
          </p>
        </div>
        <div>
          <h4 className="text-uppercase">Destaques do Treinamento:</h4>
          <ol>
            <li>
              Autoconhecimento: Os participantes serão incentivados a explorar
              suas crenças, valores e padrões de pensamento, permitindo uma
              compreensão mais profunda de si mesmos e identificando possíveis
              obstáculos mentais.
            </li>
            <li>
              Autodesenvolvimento: O treinamento fornecerá estratégias para o
              autodesenvolvimento contínuo, incluindo a prática de habilidades
              de comunicação, liderança e gestão do tempo, entre outras.
            </li>
            <li>
              Resiliência e Gerenciamento de Estresse: Os participantes
              aprenderão a lidar melhor com situações de estresse e adversidade,
              desenvolvendo maior resiliência emocional e mental.
            </li>
            <li>
              Definição de Metas e Foco: Serão ensinadas técnicas eficazes de
              definição de metas, bem como métodos para manter o foco e evitar
              distrações.
            </li>
            <li>
              Transformação de Obstáculos em Oportunidades: Os participantes
              aprenderão a ver os desafios como oportunidades de crescimento e
              aprendizado, buscando soluções criativas para superá-los.
            </li>
            <li>
              Cultivo de uma Mentalidade de Abundância: O treinamento incentiva
              a adoção de uma mentalidade de abundância, ajudando os indivíduos
              a se libertarem de pensamentos limitantes e a acreditar que o
              sucesso é possível.
            </li>
          </ol>
        </div>
        <div>
          <h4 className="text-uppercase">Resultados Esperados:</h4>
          <p>
            Ao concluir o curso "Construindo uma Mentalidade de Sucesso", os
            participantes estarão preparados para colher os frutos de uma
            mentalidade transformadora. Eles poderão:
            <li>
              Estabelecer metas claras e tangíveis em todas as áreas de suas
              vidas.
            </li>
            <li>
              Desenvolver resiliência emocional para enfrentar os desafios com
              confiança.
            </li>
            <li>
              Cultivar uma mentalidade de abundância e superar crenças
              limitantes.
            </li>
            <li>
              Fortalecer relacionamentos pessoais e profissionais através de uma
              comunicação eficaz.
            </li>
            <li>
              Alcançar maior equilíbrio entre vida pessoal e profissional.
            </li>
            <li>
              Experimentar um sentimento de realização e satisfação pessoal.
            </li>
          </p>

          <p>
            Estamos empolgados em receber você nessa jornada de crescimento e
            sucesso pessoal. Se você está pronto para explorar seu potencial
            máximo e construir uma mentalidade que o levará ao sucesso, junte-se
            a nós em nosso curso "Construindo uma Mentalidade de Sucesso" e
            comece a transformar sua vida hoje mesmo!
          </p>

          <p>
            Junte-se a nós nesta incrível jornada de autodescoberta e
            crescimento pessoal.
            <strong>Inscreva-se agora mesmo!</strong>
          </p>
        </div>
      </Container>
    </>
  );
};

export default HomeHero;
