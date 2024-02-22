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
              <img src="https://firebasestorage.googleapis.com/v0/b/mente-sucesso.appspot.com/o/SobreMim%2FJociel.png?alt=media&token=12123298-95af-43d6-a5c9-b357daf2ecfd" />
            </div>
          </div>
          <div className="coluna">
            <div className="textos">
              <div>
              <h4>Jociel Moreira:</h4>
              <h5>Criador do Construindo Mentes de Sucesso</h5>
                <span>
                  Olá, sou Jociel Moreira, um profissional com 32 anos, formado
                  em Engenharia Civil e atuante no gerenciamento de grandes
                  empreendimentos. Minha trajetória vai além da engenharia;
                  envolve liderar e desenvolver pessoas de diferentes origens e
                  níveis educacionais.
                </span>
              </div>
              <div>
                <h4>Minha Trajetória:</h4>
                <span>
                  Para aprimorar meus resultados, mergulhei nos estudos sobre
                  comportamento e desenvolvimento pessoal. Iniciei com livros e
                  avancei para cursos e participações em eventos. Essa jornada
                  transformou minha vida e permitiu que eu também impactasse
                  positivamente na vida das pessoas ao meu redor.
                </span>
              </div>
              <div>
                <h4>Minha Missão:</h4>
                <span>
                  Acredito no potencial ilimitado de cada indivíduo para
                  alcançar feitos extraordinários. Minha missão
                  é treinar e inspirar as pessoas a descobrirem sua melhor
                  versão, capacitando-as a superar desafios e alcançar os seus
                  objetivos.
                </span>
              </div>

              <div>
                <h4>O Elemento-Chave:</h4>
                <span>
                  Ao longo de minha jornada, descobri que o elemento chave para
                  a realização pessoal e profissional é a construção de uma
                  Mentalidade de Sucesso. Acredito fervorosamente que, ao
                  conquistar essa mentalidade, as pessoas poderão conquistar
                  qualquer coisa que desejarem. E não apenas isso, ao elevarmos
                  nossos padrões, também nos tornamos agentes transformadores,
                  capazes de impactar positivamente a vida de outras pessoas e,
                  assim, mudar o mundo.
                </span>
              </div>

              <div>
                <h4>Método de Treinamento:</h4>
                <span>
                  Em minhas palestras e treinamentos, compartilho com entusiasmo
                  e empatia o conhecimento e técnicas cientificamente
                  comprovadas que tenho adquirido em minha intensa busca por
                  compreender a mente humana. Minha abordagem prática e
                  aplicável oferece estratégias eficazes para construir uma
                  mentalidade resiliente, positiva e focada.
                </span>
              </div>

              <div>
                <h4>Construindo a Melhor Versão de Si:</h4>
                <span>
                  Meu objetivo é guiá-los para desbloquear seu verdadeiro
                  potencial, eliminando crenças limitantes e desenvolvendo
                  habilidades necessárias para enfrentar os desafios da vida com
                  confiança. Se busca atingir objetivos ousados, com maior
                  produtividade alcançar níveis mais elevados de sucesso e
                  impactar positivamente sua vida e a dos outros, estou aqui
                  para treiná-los nessa jornada.
                </span>

                <span>
                  Junte-se a mim em nossos treinamentos e eventos, e juntos
                  exploraremos as infinitas possibilidades da mente humana e
                  transformaremos vidas de forma extraordinária.
                </span>

                <span>
                  Você está pronto para Construir uma Mentalidade de Sucesso?
                </span>

                <span>
                  Inscreva-se agora para iniciar sua jornada de transformação.
                </span>
                <span>
                  Mal posso esperar para conhecê-lo e contribuir para sua
                  evolução na melhor versão de si mesmo(a)!
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
