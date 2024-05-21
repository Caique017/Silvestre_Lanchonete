import Logo from '../../assets/logo fundo.png'

function QuemSomos() {
    return (
      <div className="rounded-md w-full md:w-4/5 lg:w-3/5 h-76 flex flex-col md:flex-row bg-orange-50">
      <div className="w-full md:w-3/5 h-1/2 md:h-full text-left p-4 md:pl-7">
        <h1 className="text-2xl md:text-[25px] font-bold text-white mb-1 mt-4">Quem somos</h1>
        <p className="text-lg md:text-[20px] text-shadow pt-3">
          Acreditamos que os grandes prazeres da vida estão nas coisas simples, como uma boa refeição. 
          Em nosso restaurante, cada detalhe é pensado para que você se sinta em casa, desfrutando de pratos 
          deliciosos em um ambiente acolhedor.
        </p> 
      </div>
      <div className="w-full md:w-2/5 h-1/2 md:h-full flex justify-center items-center p-4">
        <img src={Logo} alt="Logo" className="rounded-md w-24 md:w-36 lg:w-48 2xl:w-60" />
      </div>
    </div>

    );
  }
  
  export default QuemSomos;



  