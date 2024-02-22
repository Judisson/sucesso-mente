import { Container } from "reactstrap";
import instagram from "@/shared/svg/instagram.svg";
import tiktok from "@/shared/svg/tiktok.svg";
import youtube from "@/shared/svg/youtube.svg";
import Treinamento from "@/Components/Treinamento";
import Ebook from "@/Components/ebook";
import FormEmail from "@/Components/FormEmail";

const Home = () => {
  return (
    <div className="pagina-home">
      <div className="imagem-estatica">
        <img src="https://firebasestorage.googleapis.com/v0/b/mente-sucesso.appspot.com/o/Home%2Fhome.png?alt=media&token=8aa2d745-3335-42c2-8701-59b0f55bf6cd" />
      </div>

      <Container className="pt-5 pb-5 container-principal-home">
        <div className="container-bemvindo mb-4">
          <h2 className="text-uppercase text-center fw-light">
            Construindo Mentes de Sucesso
          </h2>
          <h4 className="text-uppercase fw-light mt-3">SEJAM BEM-VINDOS!</h4>
          <div>
            <p>
              Você já se perguntou por que algumas pessoas são bem-sucedidas em
              suas carreiras e em suas vidas pessoais, enquanto outras parecem
              estar sempre lutando? A resposta pode estar em sua Mentalidade.
              Você sabia que cultivar uma Mentalidade de Sucesso é essencial
              para alcançar seus objetivos em todas as áreas da vida?
            </p>

            <p>
              A Nossa Missão aqui é treinar você por meio deste projeto de
              Desenvolvimento Pessoal, meticulosamente elaborado para capacitar
              aqueles que almejam o sucesso em todas as áreas da vida,
              fortalecendo, principalmente, a sua mentalidade. Acreditamos que
              cada indivíduo possui o poder de moldar sua própria realidade.
              Este curso abrangerá técnicas cientificamente comprovadas para
              você{" "}
              <strong>
                {" "}
                Construir uma Mentalidade Positiva, Resiliente e Focada
              </strong>
              . Ele fornecerá aos participantes as ferramentas essenciais para
              superar desafios, potencializar suas habilidades e atingir
              consistentemente seus objetivos.
            </p>
          </div>
        </div>
        <div className="container-destaque-treinamento mb-5">
          <h4 className="text-uppercase mb-4 pb-2">
            Destaques do Treinamento:
          </h4>
          <ol>
            <li>
              <strong>Autoconhecimento</strong>: Os participantes serão
              incentivados a explorar suas crenças, valores e padrões de
              pensamento, permitindo uma compreensão mais profunda de si mesmos
              e identificando possíveis obstáculos mentais.
            </li>
            <li>
              <strong>Autodesenvolvimento</strong>: O treinamento fornecerá
              estratégias para o autodesenvolvimento contínuo, incluindo a
              prática de habilidades de comunicação, liderança e gestão do
              tempo, entre outras.
            </li>
            <li>
              <strong>Resiliência e Gerenciamento de Estresse</strong>: Os
              participantes aprenderão a lidar melhor com situações de estresse
              e adversidade, desenvolvendo maior resiliência emocional e mental.
            </li>
            <li>
              <strong>Definição de Metas e Foco</strong>: Serão ensinadas
              técnicas eficazes de definição de metas, bem como métodos para
              manter o foco e evitar distrações.
            </li>
            <li>
              <strong>Transformação de Obstáculos em Oportunidades</strong>: Os
              participantes aprenderão a ver os desafios como oportunidades de
              crescimento e aprendizado, buscando soluções criativas para
              superá-los.
            </li>
            <li>
              <strong>Cultivo de uma Mentalidade de Abundância</strong>: O
              treinamento incentiva a adoção de uma mentalidade de abundância,
              ajudando os indivíduos a se libertarem de pensamentos limitantes e
              a acreditar que o sucesso é possível.
            </li>
            <li>
              <strong>Superando a Procrastinação com Eficiência</strong>: Está
              etapa do treinamento abordará estratégias práticas e psicológicas
              com o objetivo de capacitar os participantes a reconhecerem quais
              são os sinais da procrastinação, identificando suas raízes para
              superá-los, facilitando o progresso consistente em direção aos
              seus objetivos.
            </li>
          </ol>
        </div>
        <div className="container-resultado">
          <h4 className="text-uppercase mb-4 pb-2">Resultados Esperados:</h4>
          <p>
            Ao concluir o nosso treinamento "Construindo uma Mentalidade de
            Sucesso", os participantes estarão prontos para colher os frutos de
            uma transformação profunda e personalizada. Nossa expectativa é que,
            após a jornada conosco, você não apenas estabeleça metas claras, mas
            também as personalize para refletir suas aspirações específicas em
            todas as áreas da sua vida.
          </p>

          <p>
            Durante o curso, vamos fornecer não apenas conceitos, mas exemplos
            vívidos de como a resiliência emocional, a mentalidade de abundância
            e a comunicação eficaz podem ser aplicadas em situações reais.
            Queremos que você não apenas compreenda essas habilidades, mas
            também as visualize em seu contexto pessoal, tornando-as mais
            tangíveis e aplicáveis à sua vida diária.
          </p>
          <p>
            Além disso, incentivamos um comprometimento contínuo para maximizar
            os benefícios do curso. Após a conclusão, você terá acesso a
            recursos, como grupos de apoio online e materiais adicionais, para
            manter o ímpeto e aprofundar ainda mais o aprendizado.
          </p>
          <p>
            Reconhecemos que o sucesso é uma jornada evolutiva. Portanto,
            encorajamos você não apenas a estabelecer metas estáticas, mas a
            adaptá-las ao longo do tempo à medida que cresce e evolui. Este
            treinamento é mais do que um ponto de chegada; é o início de uma
            jornada contínua de autodescoberta e crescimento pessoal.
          </p>
          <p>
            Estamos entusiasmados em recebê-lo nesta jornada transformadora. Se
            você está pronto para explorar seu potencial máximo, construir uma
            mentalidade vitoriosa e transformar sua vida de maneira duradoura,
            junte-se a nós em nosso curso "Construindo uma Mentalidade de
            Sucesso" e comece a escrever o próximo capítulo da sua história hoje
            mesmo!
          </p>

          <p className="m-0">
            Junte-se a nós nesta incrível jornada de autodescoberta e
            crescimento pessoal.
          </p>
          <strong>Inscreva-se agora mesmo!</strong>
        </div>
        <Treinamento />
        <Ebook />
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

          <FormEmail />
        </div>
        <div className="redes">
          <h2>SIGA MENTALIDADE DE SUCESSO EM NOSSAS REDES SOCIAIS</h2>
          <div className="icons">
            <div className="background instagram">
              <img src={instagram} className="rede" alt="Instagram" />
            </div>
            <div className="background tiktok">
              <img src={tiktok} className="rede" alt="Tiktok" />
            </div>
            <div className="background youtube">
              <img src={youtube} className="rede" alt="Youtube" />
            </div>
          </div>
        </div>
        <div className="contato">
          <h3>CONTATO</h3>
          <div className="sugestao-mensagem">
            <span>
              <strong>Estamos ansiosos para ouvir de você!</strong>
            </span>
            <span>
              Se você tem alguma dúvida, sugestão, ou gostaria de obter mais
              informações sobre nossos serviços, estamos aqui para ajudar!
            </span>
            <span>
              <strong>Construindo Mentes de Sucesso</strong>
            </span>
          </div>
          <button>
            <a href="mailto:contato@construindomentesdesucesso.com.br">
              Enviar e-mail
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};
export default Home;
