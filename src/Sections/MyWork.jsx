import ModalF from "../Modal";
import React from "react";

function MyWork() {
  const [modalShow, setModalShow] = React.useState(false);
  const imgURL = "https://cdn.discordapp.com/attachments/1282830483075366964/1302970291953340446/FundoCard.png?ex=672a0d25&is=6728bba5&hm=5eead32f517c55f2398d97138819062fcd4d98040d4532140a88f492f1718829&";
  
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