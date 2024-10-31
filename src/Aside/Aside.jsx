import Button from "../Button";

function Aside(){
  return(
    <aside className=" fixed min-h-screen bg-neutral-900 flex flex-col w-64">
  
    <div>
    <img src="../src/assets/patrickFreitas.jpg" alt="Patrick Freitas" className="border-4 border-gray-400 rounded-full size-36 ml-14 mt-8 cursor-pointer" />
    <h2 className='font-bold mt-2 text-white text-xl'> <a href='/'>Patrick Freitas</a></h2>
    </div>

    <nav className="mt-60 text-white text-lg">
      <ul className='space-y-3'>
        <li className='hover:text-orange-500 transition-colors duration-200 ease-in-out'> <a href="#inicio">Início</a></li>
        <li className='hover:text-orange-500 transition-colors duration-200 ease-in-out'> <a href="#sobre-mim">Sobre mim</a></li>
        <li className='hover:text-orange-500 transition-colors duration-200 ease-in-out'> <a href="#portifolio">Portifolio</a></li>
        <li className='hover:text-orange-500 transition-colors duration-200 ease-in-out '> <a href="#contato">Contato</a></li>
      </ul>

      <div className="mt-6">
      <Button>Enviar WhatsApp</Button>
      </div>

    </nav>

    <ul className="mt-auto flex space-x-12 p-4 justify-center text-slate-200 ">
      <li className="size-0"><a href="https://www.linkedin.com/in/patrick-freitas-5bb062194/" target='_blank'><i className="bi bi-linkedin hover:text-blue-500 duration-200 ease-out"></i></a></li>
      <li className="size-0"><a href="https://www.instagram.com/patricksfs/" target='_blank'><i className="bi bi-instagram hover:text-blue-500 duration-200 ease-out"></i></a></li>
      <li className="size-0"> <a href="https://github.com/PatrickSFS" target='_blank'><i className="bi bi-github hover:text-blue-500 duration-200 ease-out"></i></a></li>
    </ul>
  </aside>
  );
}

export default Aside