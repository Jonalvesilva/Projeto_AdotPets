import "tw-elements";
import { CarouselItem } from "../components/Carousel";
import { Carousel, initTE } from "tw-elements";
import { useEffect } from "react";
import { useNavStore } from "../useNavStore";
import { imagesBanner } from "../functions/imagesBanner";
import { InfoAdocao } from "../components/InfoAdocao";
import { ComoFunciona } from "../components/ComoFunciona";
import { LinkButton } from "../components/LinkButton";

export function Home() {
  useEffect(() => {
    initTE({ Carousel });
  }, []);

  let nav = useNavStore((state: any) => state.nav);

  return (
    <div id="home" className={`w-full`}>
      <div id="div-carousel-pet">
        <CarouselItem
          id="carousel1"
          images={imagesBanner}
          className={`${nav ? `z-[-1] relative` : `relative`}`}
        />
      </div>
      <div id="div-info" className="my-12 flex flex-col items-center">
        <div
          id="info-div-title"
          className="text-lg text-black/80 pb-6 md:text-xl lg:text-2xl "
        >
          <h2>Conheça a AdotPets</h2>
        </div>
        <div
          id="info-div-description"
          className="text-md text-black/40 max-w-screen-xl md:text-lg lg:text-xl"
        >
          <p className="text-center px-2">
            Nós fazemos a conexão entre quem deseja adotar um pet com uma rede
            de mais de 129 ONGs e protetores parceiros. Funciona assim: a Petz
            disponibiliza espaços especialmente dedicados para a adoção no
            centro de suas lojas e as ONGs/protetores parceiros ficam
            responsáveis pelo processo e entrevista com os potenciais adotantes.
            Juntos somos mais fortes!
          </p>
        </div>
      </div>
      <div
        id="div-programa"
        className={`my-12 flex flex-col items-center bg-[url("../public/infoprograma.jpg")]`}
      >
        <div id="programa-div-title" className="text-center p-2">
          <p className="text-white mt-10">
            APOIE E FAÇA PARTE DA MAIOR REDE DE ADOÇÃO E BEM ESTAR DE CÃES E
            GATOS DO BRASIL.
          </p>
        </div>
        <div id="programa-div-subtitle">
          <p className="text-white mt-6">
            Toda ajuda conta e faz muita diferença.
          </p>
        </div>
        <div id="programa-div-count">
          <InfoAdocao />
        </div>
        <div
          id="programa-div-link"
          className="text-white mb-6 flex flex-col items-center gap-1"
        >
          <p>Conheça nossa ONG patrocinadora</p>
          <span>Clique aqui e saiba mais</span>
        </div>
      </div>
      <div
        id="quemsomos"
        className="max-w-screen-xl my-12 mx-auto px-2 flex flex-col items-center justify-end gap-8 md:flex-row md:gap-16"
      >
        <div id="quemsomos-div-dogImage" className="md:w-[600px] lg:w-[800px]">
          <img src="listening.png" className="w-full" alt="listening"></img>
        </div>
        <div id="quemsomos-div-text">
          <h2 className="text-3xl text-blue-700 py-4">Quem somos</h2>
          <p className="text-justify text-lg px-2">
            AdotPets é um programa criado para estreitar laços entre pessoas que
            têm o sonho de adotar um pet e nossas ONGs e protetores parceiros.
            Vamos juntos incentivar a adoção, conscientizar sobre a posse
            responsável e fomentar a cultura de doação em prol do bem-estar
            animal.
          </p>
        </div>
      </div>
      <div id="comofunciona" className="bg-blue-700">
        <div
          id="comofunciona-div-title"
          className="text-3xl text-white mx-auto max-w-screen-md flex justify-center"
        >
          <h2 className="my-8">Como Funciona</h2>
        </div>
        <div
          id="comofunciona-div-grid"
          className="px-4 flex items-center justify-center"
        >
          <ComoFunciona />
        </div>
        <div
          id="comofunciona-div-subtitle"
          className="text-md text-white text-center px-2 pb-10"
        >
          <p>
            Algumas ONGs e protetores parceiros podem solicitar a cobrança de
            uma taxa no momento da adoção, com a finalidade de auxílio de
            custos. Esta cobrança / recebimento é realizada diretamente entre o
            adotante e ONG/protetor parceiro.
          </p>
        </div>
      </div>
      <div
        id="comoadotar"
        className="max-w-screen-xl my-16 mx-auto px-2 flex flex-col items-center justify-end gap-8 md:flex-row md:gap-16"
      >
        <div
          id="comoadotar-div-catImage"
          className="w-[500px] md:w-[600px] lg:w-[800px]"
        >
          <img src="cat.png" className="w-full" alt="cat"></img>
        </div>
        <div id="comoadotar-div-text" className="w-full">
          <h2 className="text-3xl text-blue-700 py-4">Como Adotar</h2>
          <p className="text-justify text-lg pb-10">
            Basta acessar nossas páginas de adoção, escolher o pet dispónivel e
            preencher seu cadastro. Nossa equipe entrará em contato para agendar
            a entrevista. Uma vez aprovado, nossos voluntários entrarão em
            contato para agendar a adoção do animal. Você pode acessar as
            páginas de adoção através do nosso menu ou pelos botoes abaixo:
          </p>
          <div className="flex justify-center md:justify-normal">
            <LinkButton
              to="/"
              className="px-4 py-3 text-lg text-white bg-blue-700 rounded-xl mr-8"
            >
              Adoção de Cães
            </LinkButton>
            <LinkButton
              to="/"
              className=" px-4 py-3 text-lg text-white bg-green-700 rounded-xl"
            >
              Adoção de Gatos
            </LinkButton>
          </div>
        </div>
      </div>
      <div
        id="ajuda"
        className="bg-cyan-700 py-16 px-4 flex flex-col gap-8 lg:flex-row lg:justify-center lg:gap-16"
      >
        <div id="ajuda-div" className="h-full">
          <div>
            <h2 className="text-xl text-white pb-6">
              Além de adotar, você também pode ajudar de outras maneiras:
            </h2>
            <ul className="text-white list-disc pl-6">
              <li className="py-2">
                Ser voluntário nos eventos ou nos próprios abrigos das ONGs
                parceiras
              </li>
              <li className="py-2">
                Doar itens em nossas ONGs (como alimentos e acessórios)
              </li>
              <li className="py-2">Apadrinhar um pet</li>
              <li className="py-2">Oferecer um lar temporário</li>
              <li className="py-2">Alimente os Animais de Rua </li>
              <li className="py-2">Faça uma Campanha de Adoção</li>
            </ul>
          </div>
        </div>
        <div
          id="videoAjuda"
          className="w-full md:w-[700px] md:mx-auto lg:w-[600px] lg:mx-0"
        >
          <video
            src="adote-petz.mp4"
            controls
            poster="poster.jpg"
            className="rounded-lg"
          ></video>
        </div>
      </div>
    </div>
  );
}
