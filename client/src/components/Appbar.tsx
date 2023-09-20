import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { CustomMenu } from "./CustomMenu";

export function Appbar() {
  const itensMenu = [
    { title: "Quem Somos", url: "/#quemsomos" },
    { title: "Como Funciona", url: "/#comofunciona" },
    { title: "Como Adotar", url: "/#comoadotar" },
    { title: "Sites Parceiros", url: "/#sitesparceiros" },
  ];

  const [nav, setNav] = useState(false);
  return (
    <div id="appbar" className="h-16 sticky bg-blue-200 flex items-center">
      {/*Appbar*/}
      <div id="div-appbar" className="flex">
        <div id="div-logo"></div>
        <ul className="flex">
          <li>
            <CustomMenu title={"Teste"} items={itensMenu} />
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      {/*Mobile Menu Hamburguer*/}
      <div id="mobile-menu" className="px-2 md:hidden">
        <FiMenu size={30} className="cursor-pointer" />
      </div>
    </div>
  );
}
