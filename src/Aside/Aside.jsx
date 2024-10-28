
function Aside(){
  return(
    <aside className=" min-h-screen bg-gray-900 flex flex-col">
    <img src="../src/assets/patrickFreitas.jpg" alt="Patrick Freitas" className="border-4 border-gray-400 rounded-full size-28 ml-8 mr-8 mt-8" />

    <h2 className='font-bold mt-2 text-white'> <a href='/'>Patrick Freitas</a></h2>

    <nav className="mt-60 text-white">
      <ul className='space-y-3'>
        <li className='hover:text-orange-600 transition-colors duration-200 ease-in-out'> <a href="/">Início</a></li>
        <li className='hover:text-orange-600 transition-colors duration-200 ease-in-out'> <a href="/">Resumo</a></li>
        <li className='hover:text-orange-600 transition-colors duration-200 ease-in-out'> <a href="/">Portifolio</a></li>
        <li className='hover:text-orange-600 transition-colors duration-200 ease-in-out'> <a href="/">Contato</a></li>
      </ul>
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