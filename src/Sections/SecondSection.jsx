import ModalF from "../Modal";
import React from "react";

function SecondSection() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <section className=" text-l bg-neutral-700 text-white p-4 " id="portifolio">
      
        <h2 className="max-w-md mx-auto text-3xl font-bold my-32 pb-3 border-b-4 border-orange-500">
          Meu trabalho (Freelances)
        </h2>

      <div className="container  px-[200px] grid grid-cols-3 gap-y-12">
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center">
          <img
            src="../src/assets/FundoCard.png"
            alt="Patrick Freitas"
            className="cursor-pointer"
            onClick={() => setModalShow(true)}
          />
          <ModalF
            show={modalShow}
            onHide={() => setModalShow(false)}
            title="teste"
            content="teste"
            tec="teste"
            data="teste"
            site="teste"
            
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src="../src/assets/FundoCard.png"
            alt="Patrick Freitas"
            className="cursor-pointer"
            onClick={() => setModalShow(true)}
          />
          <ModalF
            show={modalShow}
            onHide={() => setModalShow(false)}
            title="teste"
            content="teste"
            tec="teste"
            data="teste"
            site="teste"
            
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src="../src/assets/FundoCard.png"
            alt="Patrick Freitas"
            className="cursor-pointer"
            onClick={() => setModalShow(true)}
          />
          <ModalF
            show={modalShow}
            onHide={() => setModalShow(false)}
            title="teste"
            content="teste"
            tec="teste"
            data="teste"
            site="teste"
            
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src="../src/assets/FundoCard.png"
            alt="Patrick Freitas"
            className="cursor-pointer"
            onClick={() => setModalShow(true)}
          />
          <ModalF
            show={modalShow}
            onHide={() => setModalShow(false)}
            title="teste"
            content="teste"
            tec="teste"
            data="teste"
            site="teste"
            
          />
        </div>
        
      </div>
    </section>
  );
}

export default SecondSection;