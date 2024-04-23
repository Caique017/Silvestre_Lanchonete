import Icon from '../assets/icon.svg'

export function Footer () {
  return (
    <div className="w-full bg-zinc-900 flex h-44 items-center">
      <div className='pl-5 md:pl-10 xl:pl-16 flex items-center gap-5 md:gap-28'>
        <img src={Icon} alt="Logo" className='size-36 xl:size-40'/>
        <div>
          <h3 className="font-bold md:text-xl xl:text-2xl">Silvestre Lanchonete</h3>
          <p className='text-sm md:text-lg xl:text-xl pt-3 md:pt-5 xl:pt-6'>Cardápio</p>
          <p className='text-sm md:text-lg xl:text-xl pt-3 md:pt-5 xl:pt-6'>Software 2024 - Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  )
}
