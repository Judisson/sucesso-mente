import { Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap';

const Exempl = () => {
  return (
    <section className="section pt-0" id="home">
      <div className="home-center">
        <div className="home-desc-center">
          <Container
            className="section home-carousel-item-container bg-home d-flex flex-column h-100 justify-content-around"
            style={{
              backgroundImage: `url(http://via.placeholder.com/1900x800.png)`,
            }}
          >
            {/* <Row className="vertical-content justify-content-center px-2 h-100 flex-row">
                    <Col
                      md={5}
                      xl={3}
                      className="features-desc justify-content-start"
                    >
                      <h2 className="text-white home-title">{item.titulo}</h2>
                      <p className="home-subtitle">{item.subTitulo}</p>
                    </Col>
                    <Col
                      sm={3}
                      md={1}
                      lg={2}
                      xl={3}
                      className="mt-3 home-spacing"
                    ></Col>
                    <Col md={6} lg={4} xl={3} className="mt-3">
                      <Suspense fallback={<></>}> {item.formulario}</Suspense>
                    </Col>
                  </Row> */}
          </Container>
        </div>
      </div>
    </section>
    // <p></p>
  );
};

export default Exempl;
