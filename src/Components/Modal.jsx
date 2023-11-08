import { Modal, ModalBody, ModalHeader } from "reactstrap";

import { MdArrowBackIosNew } from "react-icons/md";
import PropTypes from "prop-types";

const ModalEbook = ({ showModalEbook, setShowModalEbook, toggle }) => {
  return (
    <Modal
      isOpen={showModalEbook}
      toggle={toggle}
      className="modal-ebook"
      onClosed={() => setShowModalEbook(false)}
    >
      <ModalHeader className="modal-header">
        <button
          onClick={() => {
            setShowModalEbook(false);
          }}
        >
          < MdArrowBackIosNew /> Voltar
        </button>
      </ModalHeader>
      <ModalBody className="modal-body">
        <div className="coluna">
          <img src="https://via.placeholder.com/280x380.png" />
        </div>
        <div className="coluna dois">
          <h4>
            <span>7 Passos para construir uma Mentalidade de Sucesso</span>
            <span>$0.00</span>
          </h4>
          <div className="texto">
            <span>
              📘 Ebook: "7 Passos para Conquistar uma Mentalidade de Sucesso"
            </span>
            <span>
              <p>
                🌟 Alcance o Seu Potencial e Conquiste Sucesso em Todas as Áreas
                da Sua Vida! 🌟
              </p>
              Você já se perguntou o que diferencia as pessoas bem-sucedidas das
              demais? A resposta está na mentalidade. Se você deseja alcançar
              seus objetivos, superar obstáculos e elevar sua vida pessoal e
              profissional a um novo patamar, o ebook "7 Passos para Conquistar
              uma Mentalidade de Sucesso" é o seu guia definitivo.
            </span>
            <span>
              <p>
              💡 Desenvolvimento Pessoal e Sucesso Profissional em Harmonia 💡
              </p>
              Este ebook foi cuidadosamente elaborado para todos que buscam o
              crescimento pessoal, realização profissional e o alcance de metas
              que pareciam distantes. Neste livro, você encontrará um roteiro
              prático e eficaz, que combina teoria e exercícios práticos, para
              transformar sua mentalidade e alcançar o tão almejado sucesso em
              todas as áreas da sua vida.
            </span>
            <span>
              <p>🎯 Seja o Protagonista da Sua Própria História! 🎯</p>
              Não importa a sua atual situação, este ebook irá capacitá-lo(a) a
              assumir o controle da sua vida, transformar seus pensamentos e
              ações e alcançar resultados extraordinários. Os princípios
              ensinados aqui são aplicáveis a qualquer pessoa que esteja
              comprometida com seu crescimento e que deseje trilhar um caminho
              de sucesso e realização pessoal.
            </span>
            <span>
              <p>📈 Aproveite as Oportunidades! 📈</p>
              Não perca mais tempo esperando pelo sucesso, dê o primeiro passo
              hoje mesmo rumo a uma mentalidade vencedora. Invista em si
              mesmo(a) e adquira agora mesmo o ebook "7 Passos para Conquistar
              uma Mentalidade de Sucesso". Sua jornada para uma vida
              extraordinária está prestes a começar!
            </span>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalEbook;

ModalEbook.propTypes = {
  showModalEbook: PropTypes.bool.isRequired,
  toggle: PropTypes.bool.isRequired,
  setShowModalEbook: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

{
  /* <QrCodeScan props={props} modeQr={setModeQrCode} />
{modeQrCode === "Scan" && (
<Button onClick={() => setShowModalQrCode(false)}>Cancelar</Button>
)} */
}
