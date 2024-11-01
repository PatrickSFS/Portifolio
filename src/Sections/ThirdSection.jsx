import Button from '../Button';

function ThirdSection() {

  return (
    <section className="text-center bg-neutral-800 text-white min-h-screen p-10 flex flex-col items-center" id='contato'>
      <h2 className='text-3xl font-bold mt-32 border-b-4  pb-3 border-orange-500'>Fale comigo</h2>
      <div className='grid grid-cols-2 m-auto gap-44'>
        <div>
          <h3 className='text-2xl font-semibold mb-4 mt-16'>Endereço</h3>
          <p>Juiz de Fora - MG</p>
          <p>Icon <span>32 98401-7422</span></p>
          <p>Patrick.freitas@engenharia.ufjf.br</p>
          <h2>Siga Me</h2>
          <p>icones</p>
        </div>
        <div>
          <h3 className='text-2xl font-semibold mb-4 mt-16'>Entre em Contato</h3>
          <Button />
        </div>
      </div>
    </section>
  )
}

export default ThirdSection;