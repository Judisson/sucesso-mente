import { useState } from "react";
import ModalEbook from "./Modal";

const Ebook = () => {
  const [showModalEbook, setShowModalEbook] = useState(false);

  const toggle = () => {
    setShowModalEbook((prev) => !prev);
  };

  return (
    <>
    <div className="visualizacao-ebook">
      <img src="https://firebasestorage.googleapis.com/v0/b/mente-sucesso.appspot.com/o/Ebooks%2FEbook1%2FEbook1-3D.png?alt=media&token=1752dff1-4c28-43b1-93a1-23b4a57c68a6" />
      <button className="button-modal" onClick={() => setShowModalEbook(true)}>+ Visualizar</button>
      <div className="info">
        <span>7 Passos para construir uma Mentalidade de Sucesso</span>
        <span>$0.00</span>
      </div>
      <ModalEbook showModalEbook={showModalEbook} setShowModalEbook={setShowModalEbook} toggle={toggle} />

    </div>
    <div className="visualizacao-ebook">
      <img src="https://firebasestorage.googleapis.com/v0/b/mente-sucesso.appspot.com/o/Ebooks%2FEbook2%2FEbook2-3D.png?alt=media&token=8697d6c2-b52a-4358-8ca3-a8ac1fa68c24" />
      <button className="button-modal" onClick={() => setShowModalEbook(true)}>+ Visualizar</button>
      <div className="info">
        <span>7 Passos para construir uma Mentalidade de Sucesso</span>
        <span>$0.00</span>
      </div>
      <ModalEbook showModalEbook={showModalEbook} setShowModalEbook={setShowModalEbook} toggle={toggle} />

    </div>
    </>
  );
};

export default Ebook;

