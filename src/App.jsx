
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from './Button';
import Aside from './Aside/Aside';



function App() {

  return (
    <>
      <div>
        <div className='flex '>
        <Aside />
          <main className='flex-1 flex flex-col items-center p-4'>
            <image src="caminho_da_imagem" alt="Imagem" className="mb-4" />
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
      </div>
    </>
  )
}

export default App
