import Logo from '../../assets/logo fundo.png'

function QuemSomos() {
  return (
    <div className="h-76 flex w-full flex-col rounded-md bg-orange-50 md:w-4/5 md:flex-row lg:w-3/5">
      <div className="h-1/2 w-full p-4 text-left md:h-full md:w-3/5 md:pl-7">
        <h1 className="mb-1 mt-4 text-2xl font-bold text-white md:text-[25px]">
          Quem somos
        </h1>
        <p className="text-shadow pt-3 text-lg md:text-xl 2xl:text-2xl">
          Acreditamos que os grandes prazeres da vida estão nas coisas simples,
          como uma boa refeição. Em nosso restaurante, cada detalhe é pensado
          para que você se sinta em casa, desfrutando de pratos deliciosos em um
          ambiente acolhedor.
        </p>
      </div>
      <div className="flex h-1/2 w-full items-center justify-center p-4 md:h-full md:w-2/5">
        <img
          src={Logo}
          alt="Logo"
          className="w-24 rounded-md md:w-36 lg:w-48 2xl:w-60"
        />
      </div>
    </div>
  )
}

export default QuemSomos
