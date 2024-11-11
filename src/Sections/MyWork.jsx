import ModalF from "../Modal";
import React from "react";

function MyWork() {
  const [activeModal, setActiveModal] = React.useState(null); // Armazena o índice do modal ativo
  const imgURL = "https://r2.fivemanage.com/KlNzf0Pcp1lftyIT6bq7x/FundoCard.png";

  const openModal = (index) => setActiveModal(index);
  const closeModal = () => setActiveModal(null);

  return (
    <section className="text-l bg-neutral-700 text-white p-4" id="portifolio">
      <h2 className="max-w-md mx-auto text-3xl font-bold my-8 pb-3 border-b-4 border-orange-500">
        Meu trabalho (Freelances)
      </h2>

      <div className="container px-[200px] grid grid-cols-3 gap-y-12">
        
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center ml-6 w-[338px]">
          <img
            src={"https://r2.fivemanage.com/KlNzf0Pcp1lftyIT6bq7x/CE907389-14B6-4068-9D15-1076FF0B4FC4.png"}
            alt="Patrick Freitas"
            className="cursor-pointer w-[338px] h-[200px] object-cover"
            onClick={() => openModal(1)}
          />
          <ModalF
            show={activeModal === 1}
            onHide={closeModal}
            img={"https://r2.fivemanage.com/KlNzf0Pcp1lftyIT6bq7x/CE907389-14B6-4068-9D15-1076FF0B4FC4.png"}
            title="Pokemon Card Game."
            content="Este é um aplicativo web utilizando a API de Pokémons para listar e criar um Card Game baseado em turnos."
            tec="React, Vite, HTML, CSS, Axios, ESlint, Tailwind, CSS, React, Router, React, Slick, Material_UI, API_Pokémon"
            data="11/11/2024."
            site="https://pokemon-game-eu58.vercel.app"
          />
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={imgURL}
            alt="Patrick Freitas"
            className="cursor-pointer w-[338px] h-[200px] object-cover"
            onClick={() => openModal(2)}
          />
          <ModalF
            show={activeModal === 2}
            onHide={closeModal}
            img={imgURL}
            title="in progress..."
            content="in progress..."
            tec="in progress..."
            data="in progress..."
            site="in progress..."
          />
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={imgURL}
            alt="Patrick Freitas"
            className="cursor-pointer w-[338px] h-[200px] object-cover"
            onClick={() => openModal(3)}
          />
          <ModalF
            show={activeModal === 3}
            onHide={closeModal}
            img={imgURL}
            title="in progress..."
            content="in progress..."
            tec="in progress..."
            data="in progress..."
            site="in progress..."
          />
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={imgURL}
            alt="Patrick Freitas"
            className="cursor-pointer w-[338px] h-[200px] object-cover"
            onClick={() => openModal(4)}
          />
          <ModalF
            show={activeModal === 4}
            onHide={closeModal}
            img={imgURL}
            title="in progress..."
            content="in progress..."
            tec="in progress..."
            data="in progress..."
            site="in progress..."
          />
        </div>

      </div>
    </section>
  );
}

export default MyWork;
