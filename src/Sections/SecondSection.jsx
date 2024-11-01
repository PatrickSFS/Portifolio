import ModalF from "../Modal";
import React from "react";

function SecondSection() {

  const [modalShow, setModalShow] = React.useState(false);

  return (

    <section className='text-center bg-neutral-700 text-white min-h-screen p-10 flex flex-col items-center' id='portifolio'>
      <h2 className='text-3xl font-bold my-32 border-b-4  pb-3 border-orange-500'> Meu trabalho(Frelances)</h2>

      <img src="../src/assets/patrickFreitas.jpg" alt="Patrick Freitas" className="border-4 border-gray-400 rounded-full size-28 ml-16 mr-8 mt-8 cursor-pointer" onClick={() => setModalShow(true)} />
      <ModalF
        show={modalShow}
        onHide={() => setModalShow(false)}
      // fazer passar os props por aqui
      />

      <img src="../src/assets/patrickFreitas.jpg" alt="Patrick Freitas" className="border-4 border-gray-400 rounded-full size-28 ml-16 mr-8 mt-8 cursor-pointer" onClick={() => setModalShow(true)} />
      <ModalF
        show={modalShow}
        onHide={() => setModalShow(false)}
      // fazer passar os props por aqui
      />
    </section>
  )
}

export default SecondSection;