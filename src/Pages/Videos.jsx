import Icon from "@/Components/Icon";
import { Col, Container, Row } from "reactstrap";

import { WiMoonFull } from "react-icons/wi";
import { FaYoutube } from "react-icons/fa";

const Videos = () => {
  return (
    <Container className="pagina-videos">
      <h1>Vídeos</h1>
      <Row className="colunas-videos">
        <Col className="videos-coadjuvantes esquerda">
          <div className="thumb-video">
            <img src="https://via.placeholder.com/200x200.png" />
            <span className="icon-video-youtube ">
              <Icon icon={FaYoutube} size={2.5} />
            </span>
          </div>

          <div className="thumb-video">
            <img src="https://via.placeholder.com/200x200.png" />
            <span className="icon-video-youtube ">
              <Icon icon={FaYoutube} size={2.5} />
            </span>
          </div>
        </Col>
        <Col className="video-princiapl">
          <div className="thumb-video">
            <img src="https://via.placeholder.com/450x400.png" />
            <span className="icon-video-youtube ">
              <Icon icon={FaYoutube} size={2.5} />
            </span>
          </div>
        </Col>
        <Col className="videos-coadjuvantes direita">
          <div className="thumb-video">
            <img src="https://via.placeholder.com/200x200.png" />
            <span className="icon-video-youtube ">
              <Icon icon={FaYoutube} size={2.5} />
            </span>
          </div>

          <div className="thumb-video">
            <img src="https://via.placeholder.com/200x200.png" />
            <span className="icon-video-youtube ">
              <Icon icon={FaYoutube} size={2.5} />
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Videos;
