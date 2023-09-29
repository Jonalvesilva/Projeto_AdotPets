import { displayCounter } from "../functions/displayCounter";
import { isScrolledIntoView } from "../functions/isVisibleElement";

export function InfoAdocao() {
  const container = `flex flex-col items-center justify-around relative`;
  const num = `num text-white text-6xl`;
  const text = `text-center text-white w-[70%]`;
  let stillVisible: any;

  window.addEventListener("scroll", function () {
    let elem = document.querySelector("#info-doacao");

    while (isScrolledIntoView(elem) === true && stillVisible) {
      return;
    }

    if (isScrolledIntoView(elem)) {
      displayCounter();
      stillVisible = true;
    } else {
      stillVisible = false;
    }
  });

  return (
    <div
      id="info-doacao"
      className="mt-16 mb-12  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16"
    >
      <div className={container}>
        <div className="flex">
          <span className="text-white text-6xl mr-2">+</span>
          <span className={num} data-val="23">
            000
          </span>
        </div>
        <span className="border-t-4 mt-1 w-12 border-yellow-500">.</span>
        <span className={text}>toneladas de ração doadas desde 2021</span>
      </div>
      <div className={container}>
        <div className="flex">
          <span className="text-white text-6xl mr-2">+</span>
          <span className={num} data-val="10">
            000
          </span>
          <span className="text-white text-6xl ml-2">mil</span>
        </div>
        <span className="border-t-4 mt-1 w-12 border-yellow-500">.</span>
        <span className={text}>animais adotados desde 2021</span>
      </div>
      <div className={container}>
        <div className="flex">
          <span className="text-white text-6xl mr-2">+</span>
          <span className={num} data-val="129">
            000
          </span>
        </div>
        <span className="border-t-4 mt-1 w-12 border-yellow-500">.</span>
        <span className={text}>ONGs e protetores apoiadores</span>
      </div>
      <div className={container}>
        <div className="flex">
          <span className={num} data-val="23">
            000
          </span>
          <span className="text-white text-6xl ml-2">M</span>
        </div>
        <span className="border-t-4 mt-1 w-12 border-yellow-500">.</span>
        <span className={text}>Itens doados para nossas ONGs e parceiros</span>
      </div>
    </div>
  );
}
