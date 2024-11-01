import React from 'react';
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button  from './Button';
import Aside from './Aside/Aside';
import fundoSite from './assets/fundoSite.jpg';
import CardF from './Card';
import ModalF from './Modal';
import TypedEffect from './TypedEffect';

function App() {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className='text-white'>
        <div className='flex '>
          <Aside />

          <main id='inicio'
            className='flex-1 flex flex-col bg-cover bg-center min-h-screen'
            style={{
              backgroundImage: `url(${fundoSite})`
            }}
          >
            <div className='mt-32'>
              <h1 className='text-5xl font-bold'>
                Bem vindo!
              </h1>
              <TypedEffect text="Sou Desevolvedor Front End, apaixonado em criar..."/>
              <Button />
            </div>
          </main>

        </div>

        <section className="text-center bg-neutral-800 text-white min-h-screen p-10 flex flex-col items-center" id='sobre-mim'> 
          <h2 className='text-4xl font-bold mt-32 border-b-4 pb-3 border-orange-500'>Um pouco sobre mim</h2>
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
          

          <h2 className='text-4xl font-bold p-8 mt-48 border-b-4  pb-3 border-orange-500'>O que eu faço?</h2>
          <div className='items-center grid grid-cols-2 gap-2  mt-4'>
              <CardF 
              title ="Web Design"
              text="Criação de sistema web, atraente, responsivo." 
              icon ="bi bi-laptop"
              />
              <CardF 
              title ="UI/UX Design" 
              text="Para que o usuário tenha uma melhor experiência do sistema web." 
               icon ="bi bi-camera"
              />
              <CardF 
              title ="SEO Google" 
              text="Para que o sistema fique otimizado, melhorando o ranking da pesquisa do seu site no Google."
              icon ="bi bi-pc"  />
              <CardF 
              title ="Scripts" 
              text="Implementação de scripts e automações customizadas para facilitar a experiência do usuário" 
              icon ="bi bi-code-slash" />
            </div>
        </section>


        <section className='text-center bg-stone-800 text-white min-h-screen p-10 flex flex-col items-center' id='portifolio'>
          <h2 className='text-3xl font-bold my-32 border-b-4  pb-3 border-orange-500'> Meu trabalho(Frelances)</h2>
          
          <img src="../src/assets/patrickFreitas.jpg" alt="Patrick Freitas" className="border-4 border-gray-400 rounded-full size-28 ml-16 mr-8 mt-8 cursor-pointer" onClick={() => setModalShow(true)}/>
          <ModalF
            show={modalShow}
            onHide={() => setModalShow(false)}
            // fazer passar os props por aqui
          />

          <img src="../src/assets/patrickFreitas.jpg" alt="Patrick Freitas" className="border-4 border-gray-400 rounded-full size-28 ml-16 mr-8 mt-8 cursor-pointer" onClick={() => setModalShow(true)}/>
          <ModalF
            show={modalShow}
            onHide={() => setModalShow(false)}
            // fazer passar os props por aqui
          />


        </section>

        <section className="text-center bg-stone-800 text-white min-h-screen p-10 flex flex-col items-center" id='contato'> 
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

      </div>
      <footer className='bg-slate-900 text-white font-bold p-8'>
      <p>Copyright © 2024 Thainan Prado. Alguns dos direitos reservados.</p>
      <p className='text-right'>icone</p>
      </footer>
    </>
  )
}

export default App
