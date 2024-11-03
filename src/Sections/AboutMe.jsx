
import CardF from "../Card";

function AboutMe() {
  return (
    <section className=" text-left bg-neutral-800 text-white min-h-screen flex flex-col items-center" id='sobre-mim'>
      <h2 className='text-4xl font-bold mt-8 border-b-4 pb-3 border-orange-500'>Um pouco sobre mim</h2>
      <h3 className='text-2xl font-semibold mb-4 mt-16'>Eu sou <span className='text-orange-500'>Patrick Freitas </span>, um desenvolvedor web</h3>
      <p className='opacity-70 max-w-2xl mx-auto text-justify'>
        Faço analise e desenvolvimento de sistemas, porém ja codo desde meus 14 anos, minha primeira linguaguem foi C, porém mais tarde aprendi e me apaixonei por Javascript, C++, SQL, Python e orientação a objeto no geral.
        <br />
        <br />
        Atualmente meus Hobbies são programar em C++ e aprender cada vez mais do mundo TI.
      </p>
      <div className='max-w-2xl text-justify mt-8 opacity-70'>
        <p className='border-b-2 p-2'> Nome: Patrick Freitas </p>
        <p className='border-b-2 p-2'> Idade: 24 anos </p>
        <p className='border-b-2 p-2'> De: Juiz de Fora, Minas Gerais </p>
      </div>


      <h2 className='text-4xl font-bold mt-8 border-b-4  pb-3 border-orange-500'>O que eu faço?</h2>
      <div className='grid grid-cols-2 gap-2 mt-4 mb-24'>
        <CardF
          title="Web Design"
          text="Criação de sistema web, atraente, responsivo."
          icon="bi bi-laptop"
        />
        <CardF
          title="UI/UX Design"
          text="Para que o usuário tenha uma melhor experiência do sistema web."
          icon="bi bi-camera"
        />
        <CardF
          title="SEO Google"
          text="Para que o sistema fique otimizado, melhorando o ranking da pesquisa do seu site no Google."
          icon="bi bi-pc" />
        <CardF
          title="Scripts"
          text="Implementação de scripts e automações customizadas para facilitar a experiência do usuário"
          icon="bi bi-code-slash" />
      </div>
    </section>
  )
}

export default AboutMe;