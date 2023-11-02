import React, { useEffect } from "react";
// import { useDispatch } from 'react-redux';
// import { fetchCategorias } from '../../../redux/actions/categoriaActions';

import { Container } from "reactstrap";
import instagram from "@/shared/svg/instagram.svg";
import tiktok from "@/shared/svg/tiktok.svg";
import youtube from "@/shared/svg/youtube.svg";

const Home = () => {
  return (
    <div className="pagina-home">
      <div className="imagem-estatica">
        <img src="https://via.placeholder.com/1300x500.png" />
      </div>

      <Container className="pt-5 pb-5 container-principal-home">
        <div className="container-bemvindo">
          <h2 className="text-uppercase text-center fw-light">
            Construindo Mentes de Sucesso
          </h2>
          <h4 className="text-uppercase fw-light mt-3">BEM-VINDOS!</h4>
          <div>
            <p>
              Você já se perguntou por que algumas pessoas são bem-sucedidas em
              suas carreiras e em suas vidas pessoais, enquanto outras parecem
              estar sempre lutando? A resposta pode estar em sua Mentalidade.
              Ter uma Mentalidade de Sucesso é fundamental para alcançar seus
              objetivos em todas as áreas da vida!
            </p>

            <p>
              Nossa Missão é ajudar você com esse treinamento de Desenvolvimento
              Pessoal que foi projetado para capacitar indivíduos que desejam
              alcançar o sucesso em todas as áreas da vida, ao fortalecer sua
              mentalidade. Acreditamos que cada indivíduo possui a capacidade de
              moldar sua própria realidade. O curso abordará técnicas
              cientificamente comprovadas para construir uma mentalidade
              positiva, resiliente e focada, proporcionando aos participantes as
              ferramentas necessárias para superar desafios, maximizar o
              potencial e alcançar seus objetivos de forma consistente.
            </p>
          </div>
        </div>
        <div className="container-destaque-treinamento">
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
        <div className="container-resultado">
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
        <div className="container-treinamento">
          <h2>TREINAMENTO</h2>

          <div className="conteudo">
            <div className="elemento">
              <img src="https://via.placeholder.com/300x300.png" />
              <h4>Construindo Mentes de Sucesso</h4>
              <span>
                Um treinamento de desenvolvimento pessoal, para você libertar
                todo o seu potencial e construir uma vida verdadeiramente
                extraordinária, com exercícios práticos e técnicas comprovadas
                cientificamente para que você consiga acessar todo seu poder
                interior.
              </span>
            </div>
            <div className="elemento">
              <img src="https://via.placeholder.com/300x300.png" />
              <h4>Vencendo a Procrastinação</h4>
              <span>
                Conquiste o sucesso! Supere a procrastinação e alcance suas
                metas com nosso treinamento intensivo! Aprenda estratégias
                comprovadas, domine o gerenciamento do tempo e vença o medo do
                fracasso. Liberte seu verdadeiro potencial e transforme sua vida
                pessoal e profissional.
              </span>
            </div>
            <div className="elemento">
              <img src="https://via.placeholder.com/300x300.png" />
              <h4>Produtividade</h4>
              <span>
                Descubra o poder da produtividade exponencial! Aumente sua
                eficiência, conquiste mais com menos esforço e alcance
                resultados surpreendentes com nosso treinamento exclusivo. Não
                perca essa oportunidade de se destacar e transformar sua rotina
                profissional e pessoal. Eleve a sua produtividade a um novo
                patamar.
              </span>
            </div>
          </div>
        </div>
        <div className="visualizacao-ebook">
          <img src="https://via.placeholder.com/300x300.png" />
          <button>+ Visualizar</button>
          <div className="info">
            <span>7 Passos para construir uma Mentalidade de Sucesso</span>
            <span>$0.00</span>
          </div>
        </div>
        <div className="baixe-ebook">
          <h2>Baixe Gratuitamente esse ebook</h2>
          <div className="texto">
            <span>
              Neste Ebook, você aprenderá identificar onde você está, e os
              passos para chegar onde você deseja. Queremos te presentear com
              esse conhecimento que poderá mudar totalmente a sua vida.{" "}
            </span>
            <span>
              Preencha com seu melhor e-mail e receba diretamente de nossa
              equipe esse presente
            </span>
          </div>
          <div className="enviar-email">
            <input type="email" name="" id="" />
            <button>Enviar</button>
          </div>
        </div>
        <div className="redes">
          <img src={instagram} alt="Instagram" />
          <img src={tiktok} alt="Instagram" />
          <img src={youtube} alt="Instagram" />
        </div>
        <div className="contato">
          <h3>CONTATO</h3>
          <div className="sugestao-mensagem">
            <span>Estamos ansiosos para ouvir de você!</span>
            <span>
              Se você tem alguma dúvida, sugestão, ou gostaria de obter mais
              informações sobre nossos serviços, estamos aqui para ajudar!
            </span>
            <span>Construindo Mentes de Sucesso</span>
            <button>Enviar Email</button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Home;
