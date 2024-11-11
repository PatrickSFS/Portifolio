// Importes Gerais
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

//Componentes
import TypedEffect from './TypedEffect';
import Button from './Button';
import Aside from './FixItens/Aside';
import Footer from './Footer';
import WhatsAppButton from './FixItens/WhatsAppButton';


//Sections
import AboutMe from './Sections/AboutMe';
import MyWork from './Sections/MyWork';
import Contact from './Sections/Contact';
import Skills from './Sections/Skills';



function App() {

  return (
    <>
      <div className='flex '>
        <Aside />
        
        <main
          id='inicio'
          className='flex-1 flex flex-col bg-cover bg-center min-h-screen'
          style={{ backgroundImage: `url('https://r2.fivemanage.com/KlNzf0Pcp1lftyIT6bq7x/fundosite.jpg')` }}>

          <div className='mt-32 text-5xl font-bold'>
            <h1> Bem vindo! </h1>
            <TypedEffect text="Sou Desevolvedor Front End, apaixonado em criar..." />
            <Button />
          </div>
        </main>
      </div>

      <WhatsAppButton />

      {/* Um pouco sobre mim */}
      <AboutMe />

       {/* Habilidades */}
      <Skills />

       {/* Meu trabalho */}
      <MyWork />

       {/* Fale comigo */}
      <Contact />



      <Footer />
    </>
  )
}

export default App
