import Icon from '../assets/icon.svg'

export function Footer () {
  return (
    <div className="w-full bg-zinc-900 flex h-44 items-center">
      <div className='pl-10 flex items-center gap-5 md:gap-24'>
        <img src={Icon} alt="Logo" className='size-36 mr-5'/>
        <div>
          <h3 className="text-sm font-bold md:text-xl">Silvestre Lanchonete</h3>
          <p className='pt-5'>Cardápio</p>
          <p className='pt-5'>Software 2024 - Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  )
}
