import { Carousel } from "flowbite-react";

import Image from './assets/camisa.png';
import Banner from './assets/banner2.png';

function App() {

  return (
    <div className='container max-sm:flex justify-center flex-col items-center font-font-family'>
      <div className='logo max-sm:bg-gray-700 w-full flex h-14 justify-center items-center text-white fixed top-0'>
        <h1>LOGO MARCA</h1>
      </div>
      <div className='w-full h-96 mt-14 flex justify-center items-center'>
        <Carousel>
          <img className="w-full h-full" src={Banner} alt="..." />
          <img className="w-full h-full" src={Banner} alt="..." />
          <img className="w-full h-full" src={Banner} alt="..." />
          <img className="w-full h-full" src={Banner} alt="..." />
        </Carousel>
      </div>
      <div className='w-full flex items-center justify-center p-6'>
        <h1 className='w-full text-lg text-center'>Produtos</h1>
      </div>
      <div className='grid gap-6'> {/* PRODUTOS */}
        <div className='flex justify-center items-center flex-col pb-5'>
          <img className='bg-slate-200 p-28 ' src={Image} alt=""/>
          <span className='mt-3 text-gray-400'>Camisa de Algodão</span>
          <span className='pt-2 pb-2 font-bold'>R$60,00</span>
          <span className='text-xs text-gray-400'>3x de R$20,00 sem juros</span>
          <span className='text-xs pb-2 text-gray-400'>R$55,00 com PIX</span>
          <button className='w-full bg-black text-white pt-2 pb-2 rounded'>COMPRAR</button>
        </div>
      </div>

      
      <footer className='bg-gray-700 flex w-full h-10 justify-center items-center text-xs italic text-white'>
        <h1>Todos os direitos reservados</h1>
      </footer>
    </div>
    
  )
}

export default App
