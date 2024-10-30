
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from './Button';
import Aside from './Aside/Aside';
import fundoSite from './assets/fundoSite.jpg';
import CardF from './Card';
import TabsF from './Tabs';


function App() {

  return (
    <>
      <div>
        <div className='flex'>
          <Aside />
          <main
            className='flex-1 flex flex-col items-center justify-center p-4 bg-cover bg-center min-h-screen'
            style={{
              backgroundImage: `url(${fundoSite})`
            }}
          >
            <div className="text-center">
              <h1 className='text-3xl font-bold mb-2'>
                Bem vindo!
              </h1>
              <h2 className='text-xl font-semibold text-gray-600 mb-4'>
                Desenvolvedor Full stack
              </h2>
              <Button />
            </div>
          </main>
        </div>

        <section className="text-center bg-stone-800 text-white min-h-screen p-10 flex flex-col items-center"> 
          <h2 className='text-3xl font-bold mt-32'>Um pouco sobre mim</h2>
          <h3 className='text-2xl font-semibold mb-4 mt-16'>Eu sou Patrick Freitas, um desenvolvedor web</h3>
          <p className='opacity-70 max-w-2xl mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente harum incidunt ea, recusandae adipisci sed maxime quasi vitae sunt neque perspiciatis earum eveniet ullam veniam est fugiat saepe aut! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam animi quas deleniti blanditiis molestias nihil quod optio assumenda harum voluptatum dolorum, et rerum facilis atque pariatur cumque, quia molestiae iusto!
          </p>
        </section>

        <section className='bg-stone-900 text-white min-h-screen'>
          <h2 className='text-3xl font-bold p-8'>O que eu faço?</h2>
          <div className='flex items-center justify-center min-h-screen'>
            <div className='items-center grid grid-cols-2 gap-2 '>
            <CardF 
            title ="Web Design"
            text="Criação de sistema web, atraente, responsivo." 
            buttonContent='teste'/>
            <CardF 
            title ="UI/UX Design" 
            text="Para que o usuário tenha uma melhor experiência do sistema web." 
            buttonContent='teste'/>
            <CardF 
            title ="SEO Google" 
            text="Para que o sistema fique otimizado, melhorando o ranking da pesquisa do seu site no Google." buttonContent='teste' />
            <CardF 
            title ="SEO Google" 
            text="Para que o sistema fique otimizado, melhorando o ranking da pesquisa do seu site no Google." buttonContent='teste' />
            </div>
          </div>
        </section>

        <section className='text-center bg-stone-800 text-white min-h-screen p-10 flex flex-col items-center'>
          <h2 className='text-3xl font-bold mt-32'> Meu trabalho(Frelances)</h2>
          <TabsF />
        </section>
      </div>
    </>
  )
}

export default App
