import { Search } from "lucide-react";
import { useState, Fragment } from "react";
import { NavLink } from "./nav-link";
import { Toaster, toast } from "sonner";
import { dishes } from './menu';
import { DialogMenu } from "./dialog-menu";
import { Main } from "./main";
import { useNavigate } from "react-router-dom";

interface MenuProps {
  nome: string,
  nameSection: string | null,
  id: number,
  valor: string
}

export function Header () {
  const [searchText, setSearchText] = useState('');

  const [selectedDishes, setSelectedDishes] = useState<MenuProps[]>([]);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  function handleNavLinkClick(e: React.MouseEvent<HTMLAnchorElement>) { // evento  de clique em um elemento âncora <a> ou no nosso caso aqui <NavLink> .
    e.preventDefault();

    const targetId = e.currentTarget.getAttribute('href');
    if (targetId) {
        scrollToSection(targetId.slice(1)); // remove o primeiro caractere da string no caso # deixando apenas o nome da sessão
    }
  }

  function scrollToSection(sectionId: string) {
  const targetElement = document.getElementById(sectionId);

  if (targetElement) {
    const headerHeight = document.querySelector('.header')?.getBoundingClientRect().height || 0;
    let targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
    targetPosition -= 140;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
  }

  const addToBag = (dish: MenuProps) => {
    setSelectedDishes([...selectedDishes, dish]);
    setTotalPrice(totalPrice + parseFloat(dish.valor.replace('A partir de: R$ ', '')));
    toast.success('Prato adicionado à sacola com sucesso!');
  }

  const removeFromBag = (dish: MenuProps) => {
    setSelectedDishes(selectedDishes.filter((d) => d.id !== dish.id));
    setTotalPrice(totalPrice - parseFloat(dish.valor.replace('A partir de: R$ ', '')));
    toast.error('Prato removido da sacola com sucesso!');
  }

  function formatarPedido() {
    let mensagem = "Gostaria de fazer os seguintes pedidos:\n";
    selectedDishes.forEach((dish) => {
      mensagem += `- ${dish.nome}\n`;
    });
    return mensagem;
  }

  return (

    <div>
      <Toaster position='top-right' />
        <div className='fixed z-10 border border-white/10 bg-zinc-900 pl-4 md:pl-12 xl:pl-16 w-full flex flex-col gap-3'>
              <div className="flex mt-6 gap-7 md:gap-36 xl:gap-40 2xl:gap-80 items-center">
                <button onClick={handleNavigateHome} className="text-zinc-50 font-bold text-sm md:text-xl xl:text-2xl 2xl:text-3xl">Silvestre Lanchonete</button>
                <div className="px-3 md:w-60 xl:w-64 2xl:w-96 py-1 2xl:py-2 md:ml-40 xl:ml-72 border xl:mt-2 border-white/10 rounded-lg flex items-center gap-3 2xl:gap-6">
                  <Search className='size-3 xl:size-4 2xl:size-5 text-orange-600' />
                  <input
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                    className="bg-transparent 2xl:text-lg w-20 md:w-40 outline-none border-0 p-0 text-sm focus:ring-0"
                    placeholder="busca..."
                  />
                </div>
                <DialogMenu 
                selectedDishes={selectedDishes} 
                removeFromBag={removeFromBag} 
                totalPrice={totalPrice}
                formatarPedido={formatarPedido}
                />
              </div>
              <div className='flex items-center py-3'>
              <nav className='flex items-center gap-3 md:gap-5 xl:gap-7 2xl:gap-10'>
          {dishes
            .filter((dish) => dish.nameSection !== null) // filtro de pratos para todos que tem um nameSection (nome da sessão) não nulo.
            .map((dish) => ( // mapeia os pratos filtrados para criar o link de navegação
              <Fragment key={dish.id}> 
                {dish.nameSection && ( // verifica se nameSection existe antes de renderizar o link

                      //replace para substituição de string, \s é caracterizado como espaço, '+' significa um ou mais e /g indica que deve ser global, substituir todas ocorrências e o '-' após a virgula é o que vai ser trocado que vai substitui o espaço.
                  <NavLink href={`#${dish.nameSection.replace(/\s+/g, '-').toLowerCase()}`} onClick={handleNavLinkClick}> 
                    {dish.nameSection} 
                  </NavLink>
                )}
              </Fragment>
            ))}
              </nav>
              </div>
        </div>
      <Main 
      searchText={searchText}
      addToBag={addToBag}
      selectedDishes={selectedDishes}
      />
    </div>
  )
}