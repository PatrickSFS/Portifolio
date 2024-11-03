import Button from '../Button';

function Contact() {

  return (
    <section className="text-left bg-neutral-800 text-white p-10 flex flex-col items-center " id='contato'>
      <h2 className='text-3xl font-bold mt-8  border-b-4  pb-3 border-orange-500'>Fale comigo</h2>
      <div className='grid grid-cols-2 mb-24 gap-44'>
        <div>
          <h3 className='text-2xl font-semibold mb-4 mt-16'>Endereço</h3>
          <p>Juiz de Fora - MG</p>
          <div className='flex'>
            <i className='bi bi-telephone text-orange-500 mr-2'></i>
            <p >32 98401-7422</p>
          </div>

          <div className='flex'>
            <i className='bi bi-envelope text-orange-500 mr-2'></i>
            <p >Patrick.freitas@engenharia.ufjf.br </p>
          </div>

          <h2 className='font-bold mt-6'>Siga Me</h2>
          <div className='mt-1'>
            <a
              href="https://www.linkedin.com/in/patrick-freitas-5bb062194/"
              target="_blank"
              rel="noopener noreferrer">
              <i className='bi bi-linkedin cursor-pointer hover:text-orange-500 duration-200 ease-out'></i>
            </a>

            <a
              href="https://github.com/PatrickSFS"
              target="_blank"
              rel="noopener noreferrer">
              <i className='bi bi-github cursor-pointer ml-2 hover:text-orange-500 duration-200 ease-out'></i>
            </a>

            <a
              href="https://www.instagram.com/patricksfs/"
              target="_blank"
              rel="noopener noreferrer" >
              <i className='bi bi-instagram cursor-pointer ml-2 hover:text-orange-500 duration-200 ease-out'></i>
            </a>

          </div>
        </div>
        <div>
          <h3 className='text-2xl font-semibold mb-4 mt-16'>Entre em Contato</h3>
          <Button />
        </div>
      </div>
    </section>
  )
}

export default Contact;