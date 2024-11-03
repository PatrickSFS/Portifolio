// Importes Gerais
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

//Importe de Imagens
import fundoSite from './assets/fundoSite.jpg';

//Componentes
import TypedEffect from './TypedEffect';
import Button from './Button';
import Aside from './FixItens/Aside';
import Footer from './Footer';
import WhatsAppButton from './FixItens/WhatsAppButton';

//Sections
import FirstSection from './Sections/FirstSection';
import SecondSection from './Sections/SecondSection';
import ThirdSection from './Sections/thirdSection';




function App() {

  return (
    <>
      <div className='flex '>
        <Aside />
        
        <main
          id='inicio'
          className='flex-1 flex flex-col bg-cover bg-center min-h-screen'
          style={{ backgroundImage: `url(${fundoSite})` }}>

          <div className='mt-32 text-5xl font-bold'>
            <h1> Bem vindo! </h1>
            <TypedEffect text="Sou Desevolvedor Front End, apaixonado em criar..." />
            <Button />
          </div>
        </main>
      </div>

      <WhatsAppButton />
      
      {/* Um pouco sobre mim */}
      <FirstSection />

       {/* Meu trabalho */}
      <SecondSection />

       {/* Fale comigo */}
      <ThirdSection />



      <Footer />
    </>
  )
}

export default App
