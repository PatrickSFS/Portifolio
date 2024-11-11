import ModalF from "../Modal";
import React from "react";

function MyWork() {
  const [modalShow, setModalShow] = React.useState(false);
  const imgURL = "https://r2.fivemanage.com/KlNzf0Pcp1lftyIT6bq7x/FundoCard.png";
  
  return (
    <section className=" text-l bg-neutral-700 text-white p-4 " id="portifolio">
      
        <h2 className="max-w-md mx-auto text-3xl font-bold my-8 pb-3 border-b-4 border-orange-500">
          Meu trabalho (Freelances)
        </h2>

      <div className="container  px-[200px] grid grid-cols-3 gap-y-12">
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={imgURL}
            alt="Patrick Freitas"
            className="cursor-pointer"
            onClick={() => setModalShow(true)}
          />
          <ModalF
            show={modalShow}
            onHide={() => setModalShow(false)}
            img={imgURL}
            title="in progress..."
            content="in progress..."
            tec="in progress..."
            data="in progress..."
            site="in progress..."
            
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src={imgURL}
            alt="Patrick Freitas"
            className="cursor-pointer"
            onClick={() => setModalShow(true)}
          />
          <ModalF
            show={modalShow}
            onHide={() => setModalShow(false)}
            img={imgURL}
            title="in progress..."
            content="in progress..."
            tec="in progress..."
            data="in progress..."
            site="in progress..."
            
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src={imgURL}
            alt="Patrick Freitas"
            className="cursor-pointer"
            onClick={() => setModalShow(true)}
          />
          <ModalF
            show={modalShow}
            onHide={() => setModalShow(false)}
            img={imgURL}
            title="in progress..."
            content="in progress..."
            tec="in progress..."
            data="in progress..."
            site="in progress..."
          />
        </div>

        <div className="flex flex-col items-center justify-center mb-24">
          <img
            src={imgURL}
            alt="Patrick Freitas"
            className="cursor-pointer"
            onClick={() => setModalShow(true)}
          />
          <ModalF
            show={modalShow}
            onHide={() => setModalShow(false)}
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