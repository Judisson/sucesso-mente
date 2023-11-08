import { useState } from "react";
import ModalEbook from "./Modal";

const Ebook = () => {
  const [showModalEbook, setShowModalEbook] = useState(false);

  const toggle = () => {
    setShowModalEbook((prev) => !prev);
  };

  return (
    <div className="visualizacao-ebook">
      <img src="https://via.placeholder.com/280x380.png" />
      <button className="button-modal" onClick={() => setShowModalEbook(true)}>+ Visualizar</button>
      <div className="info">
        <span>7 Passos para construir uma Mentalidade de Sucesso</span>
        <span>$0.00</span>
      </div>
      <ModalEbook showModalEbook={showModalEbook} setShowModalEbook={setShowModalEbook} toggle={toggle} />

    </div>
  );
};

export default Ebook;

