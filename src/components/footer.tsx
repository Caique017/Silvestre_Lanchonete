import Icon from '../assets/icon.svg'

export function Footer () {
  return (
    <div className="w-full bg-zinc-900 flex h-44 2xl:h-52 items-center">
      <div className='pl-5 md:pl-10 2xl:pl-16 flex items-center gap-5 md:gap-28'>
        <img src={Icon} alt="Logo" className='size-36 2xl:size-48'/>
        <div>
          <h3 className="font-bold md:text-xl 2xl:text-3xl">Silvestre Lanchonete</h3>
          <p className='text-sm md:text-lg 2xl:text-2xl pt-3 md:pt-5 2xl:pt-6'>Cardápio</p>
          <p className='text-sm md:text-lg 2xl:text-2xl pt-3 md:pt-5 2xl:pt-6'>Software 2024 - Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  )
}
