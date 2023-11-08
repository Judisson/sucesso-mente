import Icon from "@/Components/Icon";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const ListaPerguntas = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAnswer = () => {
    setIsExpanded(!isExpanded);
  };

  return (
      <div className="pergunta-resposta">
        <h2 className="pergunta" onClick={toggleAnswer}>
          {question}
          <Icon icon={MdKeyboardArrowDown} size={2.5} color={"black"} />
        </h2>
        <div className={`resposta ${isExpanded ? "expanded" : ""}`}>
          {answer}
        </div>
      </div>
  );
};

function Mais() {
  const faqData = [
    {
      question: "Para quem é indicado esse curso?",
      answer:
        'Nosso curso "Construindo uma Mentalidade de Sucesso" é direcionado para todas as pessoas que desejam alcançar seus objetivos, superar desafios e desenvolver uma mentalidade positiva e focada. Se você está em busca de crescimento pessoal e profissional, busca melhorar sua autoconfiança, enfrentar obstáculos com resiliência e cultivar uma mentalidade de sucesso, este curso é para você!',
    },
    {
      question: "Esse curso é adequado para profissionais de todas as áreas?",
      answer:
        "O curso é projetado para profissionais de todas as áreas. Independentemente de sua carreira ou background, as estratégias e técnicas ensinadas são aplicáveis ​​e trarão resultados benéficos para qualquer pessoa que deseje crescer e prosperar em suas vidas pessoais e profissionais.",
    },
    {
      question: "O curso oferece algum tipo de suporte após sua conclusão?",
      answer:
        "Sim! Valorizamos a jornada contínua de crescimento de nossos alunos. Após a conclusão do curso, você terá acesso a suporte, incluindo recursos adicionais, artigos exclusivos e até mesmo sessões de acompanhamento com nossos coaches. Nossa equipe estará pronta para apoiá-lo(a) em sua caminhada para o sucesso, fornecendo orientações e motivação para ajudá-lo(a) a alcançar seus objetivos de longo prazo.",
    },
  ];

  return (
    <div className="container-principal-mais">
      <h1>Mais</h1>
      <div className="perguntas">
        {faqData.map((item, index) => (
          <ListaPerguntas
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}

export default Mais;
