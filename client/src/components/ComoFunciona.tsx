export function ComoFunciona() {
  const title = "text-lg text-blue-800 mt-2";
  const text = "text-md text-gray-600 text-center my-3";

  return (
    <div className="mt-8 mb-12 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-16">
      <div className="comofunciona-item bg-white rounded-lg p-4 flex flex-col items-center w-[350px]">
        <div className="w-24 my-2">
          <img src="comofunciona/adocao.svg" alt="adocao"></img>
        </div>
        <div className={title}>
          <span>Ache seu Pet</span>
        </div>
        <div className={text}>
          <p>
            Visite nossa páginas de adoção. Lá você irá conhecer os pets das
            ONGs/protetores parceiros para criar a conexão perfeita com cão e/ou
            gato que busca um novo lar.
          </p>
        </div>
      </div>
      <div className="comofunciona-item bg-white rounded-lg p-4 flex flex-col items-center w-[350px]">
        <div className="w-24 my-2">
          <img src="comofunciona/form.svg" alt="form"></img>
        </div>
        <div className={title}>
          <span>Formulário de Interesse</span>
        </div>
        <div className={text}>
          <p>
            Faça o preenchimento do formulário de interesse e aguarde o contato
            de nossos voluntários em até 48 horas. O voluntário da ONG/protetor
            realizará uma entrevista para averiguar e analisar o perfil de cada
            candidato.
          </p>
        </div>
      </div>
      <div className="comofunciona-item bg-white rounded-lg p-4 flex flex-col items-center w-[350px]">
        <div className="w-24 my-2">
          <img src="comofunciona/check.svg" alt="check"></img>
        </div>
        <div className={title}>
          <span>Avaliação da adoção</span>
        </div>
        <div className={text}>
          <p>
            Após a entrevista, a ONG/protetor parceiro irá fazer a análise do
            cadastro e perfil do adotante vs pet escolhido. Preenchendo os
            requisitos, você recebe a aprovação em até 24 horas.
          </p>
        </div>
      </div>
      <div className="comofunciona-item bg-white rounded-lg p-4 flex flex-col items-center w-[350px]">
        <div className="w-24 my-2">
          <img src="comofunciona/complete.svg" alt="complete"></img>
        </div>
        <div className={title}>
          <span>Adoção Completa</span>
        </div>
        <div className={text}>
          <p>
            Caso seja aprovado pelo voluntário da ONG/protetor, o pet será
            direcionado para uma ONG próxima do seu endereço. Quando concluído,
            nossos voluntários entrarão em contato para combinar um dia para
            poder buscar seu pet e levar para casa!
          </p>
        </div>
      </div>
    </div>
  );
}
