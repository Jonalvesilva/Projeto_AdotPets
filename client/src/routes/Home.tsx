import "tw-elements";
import { CarouselItem } from "../components/Carousel";
import { Carousel, initTE } from "tw-elements";
import { useEffect } from "react";
import { useNavStore } from "../useNavStore";
import { InfoAdocao } from "../components/InfoAdocao";
import { ComoFunciona } from "../components/ComoFunciona";
import { LinkButton } from "../components/LinkButton";

export function Home() {
  let nav = useNavStore((state: any) => state.nav);

  useEffect(() => {
    initTE({ Carousel });
  }, []);

  const images = [
    "/banner/1.jpg",
    "/banner/2.png",
    "/banner/3.jpg",
    "/banner/4.jpg",
    "/banner/5.png",
    "/banner/6.jpg",
  ];
  const backgroundInfoPrograma = `bg-[url("../public/infoprograma.jpg")]`;

  return (
    <div id="home" className={`h-screen w-full `}>
      <div id="div-carousel-pet">
        <CarouselItem
          id="carousel1"
          images={images}
          className={`${nav ? `z-[-1] relative` : `relative`}`}
        />
      </div>
      <div id="div-info" className="my-12 flex flex-col items-center">
        <div
          id="div-title"
          className="text-lg md:text-xl lg:text-2xl text-black/80 pb-6"
        >
          <h2>Conheça a AdotPets</h2>
        </div>
        <div
          id="div-description"
          className="text-md md:text-lg lg:text-xl text-black/40 max-w-screen-xl"
        >
          <p className="px-2 text-center">
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
        id="div-info-programa"
        className={`my-12 flex flex-col items-center ${backgroundInfoPrograma}`}
      >
        <div id="info-programa-title" className="p-2 text-center">
          <p className="mt-10 text-white">
            APOIE E FAÇA PARTE DA MAIOR REDE DE ADOÇÃO E BEM ESTAR DE CÃES E
            GATOS DO BRASIL.
          </p>
        </div>
        <div id="info-programa-subtitle">
          <p className="mt-6 text-white">
            Toda ajuda conta e faz muita diferença.
          </p>
        </div>
        <div id="info-programa-count">
          <InfoAdocao />
        </div>
        <div
          id="info-programa-link"
          className="flex flex-col text-white items-center gap-1 mb-6"
        >
          <p>Conheça nossa ONG patrocinadora</p>
          <span className="">Clique aqui e saiba mais</span>
        </div>
      </div>
      <div
        id="quemsomos"
        className="flex flex-col md:flex-row items-center justify-end max-w-screen-xl my-12 mx-auto px-2 gap-8 md:gap-16"
      >
        <div id="div-dogImage" className="md:w-[600px] lg:w-[800px]">
          <img src="listening.png" className="w-full" alt="listening"></img>
        </div>
        <div id="div-text-quemsomos">
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
          id="div-title-comofunciona"
          className="flex max-w-screen-md justify-center text-3xl mx-auto text-white"
        >
          <h2 className="my-8">Como Funciona</h2>
        </div>
        <div
          id="div-grid-comofunciona"
          className="px-4 flex items-center justify-center"
        >
          <ComoFunciona />
        </div>
        <div className="text-md text-white text-center px-2 pb-10">
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
        className="flex flex-col md:flex-row items-center justify-end max-w-screen-xl my-16 mx-auto px-2 gap-8 md:gap-16"
      >
        <div id="div-catImage" className="w-[500px] md:w-[600px] lg:w-[800px]">
          <img src="cat.png" className="w-full" alt="cat"></img>
        </div>
        <div id="div-text-comoadotar" className="w-full">
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
        className="bg-cyan-700 py-16 flex flex-col px-4 gap-8 lg:flex-row lg:justify-center lg:gap-16"
      >
        <div id="div-ajuda" className="h-full">
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
            src="https://www.adotepetz.com.br/videos/adote-petz.mp4"
            controls
            poster="poster.jpg"
            className="rounded-lg"
          ></video>
        </div>
      </div>
    </div>
  );
}
