import { dishes } from './menu';
import { Separator } from "./ui/separator";

interface MenuProps {
  nome: string,
  nameSection: string | null,
  id: number,
  valor: string
}

interface MainProps {
  searchText: string;
  addToBag: (dish: MenuProps) => void;
  selectedDishes: MenuProps[];
}

export function Main ({ searchText, addToBag }: MainProps) {
  
  return (
    <div className="mx-10 pt-32 md:pt-40 xl:pt-44">
      {/*Filtra os pratos com base no texto de pesquisa e renderiza cada prato filtrado */}
    {dishes
    .filter((dish) => // Mantém o prato se o texto de pesquisa estiver vazio ou se o nome do prato contiver o texto de pesquisa
        searchText.trim() === '' ||
        dish.nome.toLowerCase().includes(searchText.toLowerCase())
    )
    .map((dish, index) => (
      <div key={dish.id} id={dish.nameSection ? dish.nameSection.replace(/\s+/g, '-').  toLowerCase() : ''} className="prato pb-8"> {/* Renderiza o cabeçalho da seção se nameSection existir */}
          {dish.nameSection && <h2 className="text-[17px] 2xl:text-2xl font-semibold w-full flex justify-center md:justify-start pb-2">{dish.nameSection}</h2>}
          {/* Renderiza o separador se não for o primeiro prato e nameSection existir */}
          {index !== 0 && dish.nameSection && <Separator className="bg-white/10 mb-5" />}
          <button
              type="button"
              onClick={() => addToBag(dish)}
              className="border border-white/10 w-72 2xl:w-96 h-28 2xl:h-40 py-3 px-5 rounded-lg hover:bg-zinc-900 hover:transition duration-700 ease-in-out"
          >
              <h3 className="text-sm 2xl:text-xl opacity-50 pb-3">{dish.nome}</h3>
              <p className="2xl:text-[22px]">{dish.valor}</p>
          </button>
      </div>
    ))}
  </div>
  )
}