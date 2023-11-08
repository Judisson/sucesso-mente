import Treinamento from "@/Components/Treinamento";
import { Container } from "reactstrap";

const Treinamentos = () => {
  return (
    <div className="pagina-treinamentos">
      <Container className="container-principal-treinamentos">
        <h2>CONHEÇA O JOCIEL MOREIRA</h2>
        <div className="colunas">
          <div className="coluna">
            <div className="foto-jociel">
              <img src="https://via.placeholder.com/300x300.png" />
            </div>
          </div>
          <div className="coluna">
            <div className="textos">
              <div>
                <span>
                  Olá, sou Jociel Moreira, um apaixonado pelo desenvolvimento
                  humano e uma alma inquieta em busca do conhecimento sobre a
                  mente humana. Sou formado em Engenharia Civil, mas minha
                  verdadeira paixão sempre foi a transformação de vidas através
                  do treinamento e inspiração.
                </span>
              </div>
              <div>
                <h4>Minha Missão:</h4>
                <span>
                  Acredito que cada indivíduo possui um potencial ilimitado para
                  alcançar grandes feitos e realizar seus sonhos mais
                  audaciosos. Minha missão de vida é treinar e inspirar pessoas
                  a descobrirem a melhor versão de si mesmas, capacitando-as a
                  superar desafios e conquistar suas metas e objetivos.
                </span>
                <span>
                  Ao longo de minha jornada, descobri que o elemento chave para
                  a realização pessoal e profissional é a construção de uma
                  mentalidade de sucesso. Acredito fervorosamente que, ao
                  conquistar uma mentalidade de sucesso, as pessoas podem
                  conquistar qualquer coisa que desejarem. E não apenas isso, ao
                  elevarmos nossos padrões, também nos tornamos agentes
                  transformadores, capazes de impactar positivamente a vida de
                  outras pessoas e, assim, mudar o mundo.
                </span>
              </div>
              <div>
                <h4>Minha Abordagem:</h4>
                <span>
                  Em minhas palestras e treinamentos, compartilho com entusiasmo
                  e empatia o conhecimento que tenho adquirido em minha intensa
                  busca por compreender a mente humana. Utilizo uma abordagem
                  prática e aplicável, fornecendo estratégias eficazes para
                  construir uma mentalidade resiliente, positiva e focada.
                </span>
              </div>
              <div>
                <h4>Construindo a Melhor Versão de Si:</h4>
                <span>
                  Meu objetivo é guiar meus ouvintes e alunos a desbloquearem
                  seu verdadeiro potencial, eliminando crenças limitantes e
                  desenvolvendo habilidades para enfrentar os desafios da vida
                  com confiança e determinação.
                </span>

                <span>
                  Se você deseja conquistar seus objetivos mais ousados, atingir
                  níveis mais elevados de sucesso pessoal e profissional e,
                  acima de tudo, impactar positivamente sua vida e a vida dos
                  outros, eu estou aqui para apoiá-lo nessa jornada.
                </span>

                <span>
                  Junte-se a mim em meus eventos e treinamentos, e juntos, vamos
                  explorar as infinitas possibilidades da mente humana e
                  transformar vidas de forma extraordinária.
                </span>

                <span>
                  Vamos embarcar nessa jornada de crescimento e mudança juntos?
                  Mal posso esperar para conhecê-lo e inspirá-lo a se tornar a
                  melhor versão de si mesmo(a)!
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Treinamento />
    </div>
  );
};

export default Treinamentos;
