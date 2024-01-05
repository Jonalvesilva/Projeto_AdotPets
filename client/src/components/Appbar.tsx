import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { CustomMenu } from "./CustomMenu";
import { LinkButton } from "./LinkButton";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavStore } from "../useNavStore";

export function Appbar() {
  const itensMenu = [
    { title: "Início", url: "#carousel1" },
    { title: "Quem Somos", url: "#quemsomos" },
    { title: "Como Funciona", url: "#comofunciona" },
    { title: "Como Adotar", url: "#comoadotar" },
  ];

  const [nav, setNav] = useState(false);
  const [menuInst, setMenuInst] = useState(false);
  const setIsNav = useNavStore((state: any) => state.setIsNav);
  const handleNav = () => {
    setNav(!nav);
    setIsNav(!nav);
  };

  const handleMenuInst = () => {
    setMenuInst(!menuInst);
  };

  useEffect(() => {
    const style = document.getElementsByTagName("body")[0].style;
    nav ? (style.overflow = "hidden") : (style.overflow = "");
  }, [nav]);

  return (
    <div
      id="appbar"
      className="h-[110px] w-full sticky top-0 left-0  z-10 bg-[#5F9EA0] flex items-center"
    >
      {/*Appbar*/}
      <div id="div-appbar" className="flex h-full w-full justify-between ">
        <div id="div-logo" className="w-32">
          <img src="logo.png" alt="logo" className="w-full h-full" />
        </div>

        <ul className="hidden md:flex items-center px-4 gap-10 md:text-lg lg:text-xl">
          <li
            key="institucional"
            className="text-white hover:bg-white hover:text-black ease-in duration-200  rounded-lg"
          >
            <CustomMenu title={"Institucional"} items={itensMenu} />
          </li>

          <li
            key="adocaodecao"
            className="text-white hover:text-black hover:bg-white ease-in duration-200 p-3 rounded-lg cursor-pointer"
          >
            Adoção de Cães
          </li>

          <li
            key="adocaodegato"
            className="text-white hover:text-black  hover:bg-white ease-in duration-200 p-3 rounded-lg  cursor-pointer"
          >
            Adoção de Gatos
          </li>
          <li
            key="contato"
            className="text-white hover:text-black hover:bg-white ease-in duration-200 p-3 rounded-lg  cursor-pointer"
          >
            Contato
          </li>
        </ul>
      </div>

      {/*Mobile Menu Hamburguer*/}
      <div
        id="mobile-menu"
        onClick={handleNav}
        className={nav ? `hidden` : `px-2 md:hidden`}
      >
        <FiMenu size={30} className="cursor-pointer text-white" />
      </div>

      {/*Mobile Appbar*/}
      <div id="mobile-appbar" className="">
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50 min-h-[800px]"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300 min-h-[800px]"
                : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] ease-in duration-300 min-h-[800px]"
            }
          >
            <div className="">
              <div className="flex w-full items-center justify-between">
                <img src="logo.png" className="w-32 h-28" alt="logo"></img>
                <div
                  onClick={handleNav}
                  className="text-black rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="text-black w-[85%] md:w-[90%] py-4">ADOTPETS</p>
              </div>
              <div className="flex flex-col">
                <ul className="uppercase flex flex-col ">
                  <li
                    key="mobile-institucional"
                    onClick={handleMenuInst}
                    className="text-sm py-3 text-black flex flex-col cursor-pointer"
                  >
                    {" "}
                    <div className="flex flex-row">
                      Institucional{" "}
                      <IoIosArrowDroprightCircle
                        size={18}
                        className={
                          menuInst
                            ? `mt-[1px] ml-2 transition-transform rotate-90`
                            : `mt-[1px] ml-2`
                        }
                      />
                    </div>
                    <ul
                      className={
                        menuInst ? `flex flex-col gap-2 p-2 mt-2` : `hidden`
                      }
                    >
                      {itensMenu.map((element, index) => {
                        return (
                          <a
                            key={`mobileLink-${index}`}
                            href={`${element.url}`}
                            onClick={handleNav}
                          >
                            <li
                              key={`mobile-${index}`}
                              className="p-2"
                            >{`${element.title}`}</li>
                          </a>
                        );
                      })}
                    </ul>
                  </li>
                  <LinkButton to="/" onclick={handleNav}>
                    <li
                      key="mobile-adocaodecao"
                      className="py-3 text-sm text-black"
                    >
                      Adoção de Cães
                    </li>
                  </LinkButton>
                  <LinkButton to="/" onclick={handleNav}>
                    <li
                      key="mobile-adocaodegato"
                      className="py-3 text-sm text-black"
                    >
                      Adoção de Gatos
                    </li>
                  </LinkButton>
                  <LinkButton to="/" onclick={handleNav}>
                    <li
                      key="mobile-contato"
                      className="py-3 text-sm text-black"
                    >
                      Contato
                    </li>
                  </LinkButton>
                </ul>
              </div>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-green-600 pb-2">
                  Nossas Redes Sociais
                </p>
                <div className="flex items-center justify-evenly my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg bg-green-700 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaWhatsapp size={20} className="text-white" />
                  </div>
                  <div className="rounded-full shadow-lg bg-blue-700 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaFacebook size={20} className="text-white" />
                  </div>
                  <div className="rounded-full shadow-lg bg-pink-700 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaInstagram size={20} className="text-white" />
                  </div>
                  <div className="rounded-full shadow-lg bg-blue-400 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaTwitter size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
