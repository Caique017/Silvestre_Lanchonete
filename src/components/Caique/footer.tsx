import Icon from '../../assets/icon.svg'

export function Footer() {
  return (
    <div className="flex h-44 w-full items-center bg-zinc-900 2xl:h-52">
      <div className="flex items-center gap-5 pl-5 md:gap-28 md:pl-10 2xl:pl-16">
        <img src={Icon} alt="Logo" className="size-36 2xl:size-48" />
        <div>
          <h3 className="font-bold md:text-xl 2xl:text-3xl">
            Silvestre Lanchonete
          </h3>
          <p className="pt-3 text-sm md:pt-5 md:text-base xl:text-lg 2xl:pt-6 2xl:text-2xl">
            Cardápio
          </p>
          <p className="pt-3 text-sm md:pt-5 md:text-base xl:text-lg 2xl:pt-6 2xl:text-2xl">
            © Software 2024 - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}
