import { dishes } from './menu'
import { Separator } from './ui/separator'

interface MenuProps {
  nome: string
  nameSection: string | null
  id: number
  valor: string
}

interface MainProps {
  searchText: string
  addToBag: (dish: MenuProps) => void
  selectedDishes: MenuProps[]
}

export function Main({ searchText, addToBag }: MainProps) {
  return (
    <div className="mx-10 pt-32 md:pt-40 xl:pt-44">
      {/* Filtra os pratos com base no texto de pesquisa e renderiza cada prato filtrado */}
      {dishes
        .filter(
          (
            dish, // Mantém o prato se o texto de pesquisa estiver vazio ou se o nome do prato contiver o texto de pesquisa
          ) =>
            searchText.trim() === '' ||
            dish.nome.toLowerCase().includes(searchText.toLowerCase()),
        )
        .map((dish, index) => (
          <div
            key={dish.id}
            id={
              dish.nameSection
                ? dish.nameSection.replace(/\s+/g, '-').toLowerCase()
                : ''
            }
            className="prato pb-8"
          >
            {' '}
            {/* Renderiza o cabeçalho da seção se nameSection existir */}
            {dish.nameSection && (
              <h2 className="flex w-full justify-center pb-2 text-[17px] font-semibold md:justify-start 2xl:text-2xl">
                {dish.nameSection}
              </h2>
            )}
            {/* Renderiza o separador se não for o primeiro prato e nameSection existir */}
            {index !== 0 && dish.nameSection && (
              <Separator className="mb-5 bg-white/10" />
            )}
            <button
              type="button"
              onClick={() => addToBag(dish)}
              className="h-28 w-72 rounded-lg border border-white/10 px-5 py-3 duration-700 ease-in-out hover:bg-zinc-900 hover:transition 2xl:h-40 2xl:w-96"
            >
              <h3 className="pb-3 text-sm opacity-50 2xl:text-xl">
                {dish.nome}
              </h3>
              <p className="2xl:text-[22px]">{dish.valor}</p>
            </button>
          </div>
        ))}
    </div>
  )
}
